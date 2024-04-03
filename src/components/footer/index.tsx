import { GithubIcon } from "@/assets/icons";
import { download, logo, me } from "@/assets/images";
import { BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Pages",
    links: [
      { title: "Privacy", url: "/" },
      { title: "Terms and conditions", url: "/" },
      { title: "Cookies", url: "/" },
    ],
  },

  {
    title: "Links",
    links: [
      { title: "Home", url: "/" },
      { title: "Privacy", url: "/" },
      { title: "Cookies", url: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-text sticky top-full">
      <div className="w-full bej ">
        <div className="container py-16 flex flex-col md:flex-row gap-12 items-start justify-between">
          <section>
            <img src={logo} alt="logo" className="w-64 mb-8 mx-auto md:mx-0" />
            <img src={download} alt="logo" className="w-96 mb-8" />
            <p className="text-base text-center">Company # 490039-445, Registered with House of companies.</p>
          </section>

          <section>
            <ul className="flex flex-col md:flex-row items-start md:gap-10">
              {links.map((link, index) => (
                <li key={index}>
                  <p className="font-bold text-lg mb-5">{link.title}</p>
                  {link.links.map((linkItem, i) => (
                    <Link to={linkItem.url} key={i} className="block text-base text-balance underline mb-4">
                      {linkItem.title}
                    </Link>
                  ))}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <ul className="flex flex-col md:flex-row gap-4 justify-between w-full md:w-auto text-lg container py-6 text-white items-center">
        <li className="text-balance ">Order.uk &#169; Copyright 2024, All Rights Reserved.</li>

        <li className="md:flex items-center hidden ">
          <span className="hidden md:block">This project is created by :</span>
          <img src={me} alt="my_avatar" className="w-14 h-14 md:w-12 md:h-12 rounded-full object-cover" />
          Nijat Niyazov
        </li>

        <li className="flex items-center justify-between gap-3 md:justify-center ">
          <div className="flex items-center md:hidden">
            <span className="hidden md:block">This project is created by :</span>
            <img src={me} alt="my_avatar" className="w-14 h-14 md:w-12 md:h-12 rounded-full object-cover" />
            Nijat Niyazov
          </div>

          <Link to={"https://github.com/nijat-niyazov"} target="_blank" className="flex gap-2 items-center">
            <GithubIcon /> Github
          </Link>
          <Link to={"https://nijat-niyazov.vercel.app"} target="_blank" className="flex gap-2 items-center">
            <BriefcaseBusiness /> Portfolio
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
