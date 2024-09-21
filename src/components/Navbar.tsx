"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage, Language } from "@/store/LanguageSlice";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";

export const Navbar = () => {
  const language = useSelector(
    (state: { language: { language: Language } }) => state.language.language
  );
  const dispatch = useDispatch();

  const [user, setUser] = useState<{ email: string; role: string } | null>(
    null
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Check if token exists and is valid
  useEffect(() => {
    const token = Cookie.get("jwt");
    console.log(token);
    if (token) {
      try {
        const decodedToken: {
          userId: string;
          email: string;
          role: string;
          iat: number;
          exp: number;
        } = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          setUser({ email: decodedToken.email, role: decodedToken.role });
        }
      } catch (error) {
        console.error("Invalid token", error);
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

  return (
    <>
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
        <nav className="container  relative flex flex-wrap items-center py-2 px-8 mx-auto  xl:px-1">
          {/* Logo  */}
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src="/img/logo.png"
                  width="32"
                  alt="Logo"
                  height="32"
                  className="w-16"
                />
              </span>
              <span className="hidden sm:block">Ethio Earning</span>
            </span>
          </Link>

          {/* Get Started */}
          {user ? (
            <div className="gap-3 nav__item mr-2 flex ml-auto lg:order-2">
              <div className="hidden mr-3 lg:flex nav__item">
                <Link
                  href="/SignIn"
                  className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
                >
                  {language === "eng" ? "Get Started" : "አሁን ይጀምሩ"}
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="relative flex ml-auto lg:order-2">
                {isDropdownOpen && (
                  <div className="absolute right-0 top-9 mt-2 w-48 bg-white border rounded-md shadow-lg py-1">
                    <Link
                      href="/EarnerPage"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {language === "eng" ? "Dashboard" : "ዳሽቦርድ"}
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {language === "eng" ? "Settings" : "ቅንብሮች"}
                    </Link>
                  </div>
                )}
                <button
                  className="flex items-center space-x-2"
                  onClick={toggleDropdown}
                >
                  <span className="text-xl font-semibold text-white bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                    {/* {user.email.charAt(0).toUpperCase()} */}B
                  </span>
                </button>
              </div>
            </>
          )}

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
                  {!user && (
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

          {/* Menu */}
          <div className="hidden text-center lg:flex ml-[20%]  lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href={menu.link}
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    {language === "eng" ? menu.eng : menu.amh}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
