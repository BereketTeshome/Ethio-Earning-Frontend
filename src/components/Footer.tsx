import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { useSelector } from "react-redux";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export function Footer() {
  const language = useSelector((state: any) => state.language.language);
  const navigation =
    language === "eng"
      ? ["Product", "Features", "Pricing", "Company", "News"]
      : ["ምርት", "ባህሪያት", "ዋጋ", "ስለ እኛ", "አዲስ ዜና"];
  const legal =
    language === "eng"
      ? ["Terms", "Privacy", "Legal"]
      : ["ውሎች", "ግላዊነት", "ህጋዊ"];

  const socialLinks = [
    { icon: FaTwitter, link: "https://twitter.com/web3templates" },
    { icon: FaFacebookF, link: "https://facebook.com/web3templates" },
    { icon: FaInstagram, link: "https://instagram.com/web3templates" },
    { icon: FaLinkedinIn, link: "https://linkedin.com/" },
  ];

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
            >
              <Image
                src="/img/logo.png"
                alt="Logo"
                width="32"
                height="32"
                className="w-20"
              />
              <span>Ethio Earning</span>
            </Link>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              {language === "eng"
                ? "Ethio Earning is a free Advertising Platform with distinct user roles: Investor, Earner, and System Administrator. The platform leverages modern technologies for enhanced performance, security, and user experience."
                : "Ethio Earning የተለየ የተጠቃሚ ሚናዎች ያሉት ነፃ የማስታወቂያ መድረክ ነው፡ ባለሀብት፣ ገቢ እና የስርዓት አስተዳዳሪ። መድረኩ ዘመናዊ ቴክኖሎጂዎችን ለተሻሻለ አፈጻጸም፣ ደህንነት እና የተጠቃሚ ተሞክሮ ይጠቀማል።"}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={item}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              {socialLinks.map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a
            href="https://web3templates.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            S & B.
          </a>
        </div>
      </Container>
    </div>
  );
}
