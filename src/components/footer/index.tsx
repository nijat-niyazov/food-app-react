import { GithubIcon } from "@/assets/icons";
import { download, logo, me } from "@/assets/images";
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
    <footer className="bg-darkblue sticky top-full">
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

      <div className="container py-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-3">
        <p className="text-xl text-start text-balance">Order.uk &#169; Copyright 2024, All Rights Reserved.</p>

        <ul className="flex  items-center gap-2 justify-between w-full md:w-auto text-lg">
          <li className="hidden md:block">This project is created by :</li>
          <li className="flex items-center md:mr-10">
            <img src={me} alt="my_avatar" className="w-14 h-14 md:w-12 md:h-12 rounded-full object-cover" />
            Nijat Niyazov
          </li>
          <li>
            <Link to={"https://github.com/nijat-niyazov"} target="_blank" className="underline flex gap-2 items-center">
              <GithubIcon /> Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
