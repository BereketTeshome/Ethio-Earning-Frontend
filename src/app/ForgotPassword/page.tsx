"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { z } from "zod";
import GlowingBG from "@/components/GlowingBG";

// Zod schema for validation
const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

interface FormData {
  email: string;
}

interface FormErrors {
  email?: string;
  general?: string;
}

const ForgotPassword: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      // Validate form data using Zod
      const validatedData = schema.parse(formData);

      // Send request to trigger password reset email
      await axios.post(
        "https://ethio-earning-backend.vercel.app/api/users/forgot-password",
        { email: validatedData.email }
      );

      setSuccess(true);
      setLoading(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.issues.reduce(
          (acc: FormErrors, issue) => {
            acc[issue.path[0] as keyof FormErrors] = issue.message;
            return acc;
          },
          {}
        );
        setErrors(formattedErrors);
      } else if (axios.isAxiosError(error) && error.response) {
        setErrors({
          general:
            error.response.data?.message ||
            "Password reset failed. Please try again.",
        });
      } else {
        setErrors({
          general: "An unexpected error occurred. Please try again later.",
        });
      }
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="relative bg-gray-50 dark:bg-gray-900 min-h-screen justify-center">
        <GlowingBG />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Forgot Password
          </p>
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Reset your password
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>

                {errors.general && (
                  <p className="text-sm text-red-500 mt-2">{errors.general}</p>
                )}

                {success && (
                  <p className="text-sm text-green-500 mt-2">
                    Password reset link sent! Please check your email.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
