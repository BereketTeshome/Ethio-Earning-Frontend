"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage, Language } from "@/store/LanguageSlice";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const language = useSelector(
    (state: { language: { language: Language } }) => state.language.language
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");

  // Fetch email from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("email");
      if (storedEmail) {
        setEmail(storedEmail);
      }
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigation = [
    { eng: "Pricing", amh: "ዋጋ", link: "/pricing" },
    { eng: "About Us", amh: "ስለ እኛ", link: "/about" },
    { eng: "News", amh: "አዲስ ዜና", link: "/news" },
  ];

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    setEmail(""); // Clear the email in state
    router.push("/SignIn"); // Redirect to SignIn
  };

  return (
    <div>
      <div className="w-full">
        {/* Language Selector */}
        <div className="relative flex gap-3 items-center m-3 justify-end scale-90">
          <select
            value={language}
            onChange={(e) =>
              dispatch(changeLanguage(e.target.value as Language))
            }
            className="px-3 py-2 text-gray-800 bg-gray-50 rounded-md dark:bg-trueGray-800 dark:text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:ring-opacity-75 dark:focus:ring-gray-700"
          >
            <option value="eng">Eng</option>
            <option value="amh">አማ</option>
          </select>
          <ThemeChanger />
        </div>
        <nav className="container relative flex flex-wrap items-center py-2 px-8 mx-auto xl:px-1">
          {/* Logo */}
          <Link href="/">
            <span className="flex items-center ml-10 space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <Image src="/logo.png" width="152" alt="Logo" height="152" />
            </span>
          </Link>

          {/* Right side links */}
          <div className="flex items-center gap-3 ml-auto lg:order-2">
            {email ? (
              <div className="relative">
                {/* Profile button */}
                <button
                  className="flex items-center space-x-2"
                  onClick={toggleDropdown}
                >
                  <span className="text-xl font-semibold text-white bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                    {email.charAt(0).toUpperCase()}
                  </span>
                </button>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-9 mt-2 bg-white border rounded-md shadow-lg py-1">
                    <Link
                      href="/Dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {language === "eng" ? "Dashboard" : "ዳሽቦርድ"}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {language === "eng" ? "Logout" : "ውጣ"}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/SignIn"
                className="px-6 py-2 text-white bg-indigo-600 rounded-md"
              >
                {language === "eng" ? "Get Started" : "አሁን ይጀምሩ"}
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a 1 1 0 0 1 0 2H4a 1 1 0 1 1 0-2zm0 6h16a 1 1 0 0 1 0 2H4a 1 1 0 1 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {language === "eng" ? item.eng : item.amh}
                    </Link>
                  ))}
                  {!email && (
                    <Link
                      href="/SignIn"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                    >
                      {language === "eng" ? "Get Started" : "አሁን ይጀምሩ"}
                    </Link>
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </nav>
      </div>
    </div>
  );
};
