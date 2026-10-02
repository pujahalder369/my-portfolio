import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoIosCall, IoMdMailUnread } from "react-icons/io";

export const FooterData = {
  name: "Puja Halder",

  socialLinks: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/puja-halder-428270389/",
      icon: FaLinkedinIn,
    },
    {
      name: "GitHub",
      link: "https://github.com/pujahalder369",
      icon: FaGithub,
    },
  ],

  contact: [
    {
      type: "email",
      text: "halderpuja8420@gmail.com",
      link: "mailto:halderpuja8420@gmail.com",
      icon: IoMdMailUnread,
    },
    {
      type: "phone",
      text: "+91 8420526435",
      link: "tel:+918420526435",
      icon: IoIosCall,
    },
  ],
};
