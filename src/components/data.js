import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Tailored for Investors",
  desc: "Our platform offers comprehensive tools for investors to enhance their social media presence. From selecting packages to tracking growth, manage your investments with ease.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Streamlined Sign-Up Process",
      desc: "Easily sign up using social logins or email, with options to collect additional information.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Dynamic Package Selection",
      desc: "Choose from a range of packages with dynamic pricing and payment options.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Referral and Rewards System",
      desc: "Generate referral links, track sign-ups, and earn rewards for each referral.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Empowering Earners and Admins",
  desc: "Our platform isn't just for investors. Earners can complete tasks and convert rewards, while administrators manage the platform with powerful tools.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Task Management",
      desc: "Earners can access and complete tasks to earn rewards, with verification mechanisms in place.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Comprehensive Admin Dashboard",
      desc: "Admins can monitor activities, manage users, and enforce rules through a robust dashboard.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Flexible Payment Options",
      desc: "Whether you prefer ETB or USD, the platform supports multiple currencies and payment gateways.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
