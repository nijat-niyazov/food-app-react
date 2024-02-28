import { girl } from "@/assets/images";
import { CustomButton } from "@/components";
import { LoginForm } from "@/forms";
import { openModal } from "@/stores/modal";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProps } from "./type";

const MobileAuth = ({ userData }: AuthProps) => {
  const navigate = useNavigate();

  function handleClick() {
    if (!userData) openModal(<LoginForm />);
  }

  const variant = userData ? "primary" : "black";

  return userData ? (
    <Fragment>
      <img src={girl} className="w-11 h-11 rounded-full object-cover" />
      <div>
        <h3 className="text-primary text-sm font-semibold">Aycan</h3>
        <Link className="text-text text-xs border-b-2 border-text font-normal" to={"/"}>
          My Account
        </Link>
      </div>
    </Fragment>
  ) : (
    <CustomButton variant="outlined" onClick={() => openModal(<LoginForm />)} className="w-auto">
      Login/Signup
    </CustomButton>
  );
};

export default MobileAuth;
