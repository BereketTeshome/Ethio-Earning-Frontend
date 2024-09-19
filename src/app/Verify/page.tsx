// Verify.tsx
"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // To navigate on success

interface VerificationFormData {
  userEmail: string;
  token: string;
}

const Verify: React.FC = () => {
  const [formData, setFormData] = useState<VerificationFormData>({
    userEmail: "",
    token: "",
  });
  const [errors, setErrors] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);

    try {
      const response = await axios.post(
        "https://ethio-earning-backend.vercel.app/api/users/verfiyuser",
        {
          userEmail: formData.userEmail,
          token: formData.token,
        }
      );

      setSuccess(true);
      setLoading(false);
      // Navigate to a success page or login after verification
      router.push("/SignIn");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setErrors(error.response.data?.message || "Verification failed");
      } else {
        setErrors("An unexpected error occurred");
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Verify Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              value={formData.userEmail}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="token"
              className="block text-sm font-medium text-gray-700"
            >
              Verification Code
            </label>
            <input
              type="text"
              name="token"
              id="token"
              value={formData.token}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Enter the code sent to your email"
            />
          </div>
          {errors && <p className="text-red-500 text-sm mb-4">{errors}</p>}
          {success && (
            <p className="text-green-500 text-sm mb-4">
              Account verified successfully!
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
