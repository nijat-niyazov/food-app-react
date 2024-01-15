import { logo } from "@/assets/images";

const Footer = () => {
  return (
    <footer className="text-[15px] font-medium text-white sticky top-full w-full  ">
      <ul className="grid ">
        <li className=" py-6 bg-faq  ">
          <div className="container bg-opacity-60">
            <img src={logo} alt="logo" />
          </div>
        </li>

        <li className=" py-6 bg-text">
          <p className=" container">
            Order.uk Copyright 2024, All Rights Reserved.
          </p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
