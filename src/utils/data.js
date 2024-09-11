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
  title: {
    eng: "Tailored for Investors",
    amh: "ለባለሀብቶች የተበጀ",
  },
  desc: {
    eng: "Our platform offers comprehensive tools for investors to enhance their social media presence. From selecting packages to tracking growth, manage your investments with ease.",
    amh: "የእኛ መድረክ ለባለሀብቶች የማህበራዊ ሚዲያ መገኘታቸውን ለማሳደግ አጠቃላይ መሳሪያዎችን ያቀርባል። ፓኬጆችን ከመምረጥ ጀምሮ እድገትን ለመከታተል፣ ኢንቨስትመንቶችን በቀላሉ ያስተዳድሩ።",
  },
  image: benefitOneImg,
  bullets: [
    {
      title: {
        eng: "Streamlined Sign-Up Process",
        amh: "ቀላል የምዝገባ ሂደት",
      },
      desc: {
        eng: "Easily sign up using social logins or email, with options to collect additional information.",
        amh: "ተጨማሪ መረጃን ለመሰብሰብ አማራጮችን በመጠቀም ማህበራዊ መግቢያዎችን ወይም ኢሜይልን በመጠቀም በቀላሉ ይመዝገቡ።",
      },
      icon: <FaceSmileIcon />,
    },
    {
      title: {
        eng: "Dynamic Package Selection",
        amh: "ተለዋዋጭ ጥቅል ምርጫ",
      },
      desc: {
        eng: "Choose from a range of packages with dynamic pricing and payment options.",
        amh: "ከተለዋዋጭ የዋጋ አወጣጥ እና የክፍያ አማራጮች ጋር ከተለያዩ ፓኬጆች ይምረጡ።",
      },
      icon: <ChartBarSquareIcon />,
    },
    {
      title: {
        eng: "Referral and Rewards System",
        amh: "ሪፈራል እና የሽልማት ስርዓት",
      },
      desc: {
        eng: "Generate referral links, track sign-ups, and earn rewards for each referral.",
        amh: "ሪፈራል አገናኞችን ፍጠር፣ ምዝገባዎችን ይከታተሉ እና ለእያንዳንዱ ሪፈራል ሽልማቶችን ያግኙ።",
      },
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: {
    eng: "Empowering Earners and Admins",
    amh: "ገቢዎችን እና አድሚንን ማብቃት።",
  },
  desc: {
    eng: "Our platform isn't just for investors. Earners can complete tasks and convert rewards, while administrators manage the platform with powerful tools.",
    amh: "የእኛ መድረክ ለባለሀብቶች ብቻ አይደለም። ገቢዎች ስራዎችን ማጠናቀቅ እና ሽልማቶችን መቀየር ይችላሉ, አስተዳዳሪዎች ግን መድረኩን በኃይለኛ መሳሪያዎች ያስተዳድራሉ",
  },
  image: benefitTwoImg,
  bullets: [
    {
      title: {
        eng: "Task Management",
        amh: "የተግባር አስተዳደር",
      },
      desc: {
        eng: "Earners can access and complete tasks to earn rewards, with verification mechanisms in place.",
        amh: "ገቢ ሰጪዎች ሽልማቶችን ለማግኘት ስራዎችን ማግኘት እና ማጠናቀቅ ይችላሉ፣ የማረጋገጫ ዘዴዎች ተዘጋጅተዋል",
      },
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: {
        eng: "Comprehensive Admin Dashboard",
        amh: "አጠቃላይ አስተዳደር ዳሽቦርድ",
      },
      desc: {
        eng: "Admins can monitor activities, manage users, and enforce rules through a robust dashboard.",
        amh: "እንቅስቃሴዎችን መከታተል፣ ተጠቃሚዎችን ማስተዳደር እና ደንቦችን በጠንካራ ዳሽቦርድ ማስፈጸም ይችላሉ",
      },
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: {
        eng: "Flexible Payment Options",
        amh: "ተለዋዋጭ የክፍያ አማራጮች",
      },
      desc: {
        eng: "Whether you prefer ETB or USD, the platform supports multiple currencies and payment gateways.",
        amh: "ETB ወይም USD ቢመርጡ መድረኩ ብዙ ምንዛሬዎችን እና የክፍያ መግቢያዎችን ይደግፋል",
      },
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
