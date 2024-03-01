import { StorageImage } from "@/components";
import { CustomButton } from "@/components/ui";
import { UserType } from "@/constants/types/auth";
import { LoginForm } from "@/forms";
import { openModal } from "@/stores/modal";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const MobileAuth = ({ userData }: { userData: UserType | null }) => {
  function handleClick() {
    if (!userData) openModal(<LoginForm />);
  }

  const variant = userData ? "primary" : "black";

  return userData ? (
    <Fragment>
      <StorageImage src={userData.avatar} className="w-11 h-11 rounded-full object-cover" alt="avatar" />
      <div>
        <h3 className="text-primary text-sm font-semibold">
          {userData.name} {userData.lastName}
        </h3>
        <Link className="text-text text-xs border-b-2 border-text font-normal" to={"/edit-profile"}>
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
