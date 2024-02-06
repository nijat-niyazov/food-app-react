import { login, pp } from "@/assets/images";
import { CustomButton } from "@/components";
import { LoginForm } from "@/forms";
import { openModal } from "@/stores/modal";
import { useNavigate } from "react-router-dom";

const Auth = ({ authorized }: { authorized: boolean }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!authorized) openModal(<LoginForm />);
  };

  const variant = authorized ? "primary" : "black";

  return (
    <CustomButton
      onClick={handleClick}
      variant={variant}
      borderRadius="full"
      className="!pr-4 !pl-2 group hidden !py-2 md:flex items-center gap-4 w-auto"
    >
      <img src={authorized ? pp : login} alt="pp" className="w-11 h-11 object-cover" />

      <span className="text-lg font-medium  group-hover:underline">{authorized ? "Nijat Niyazov" : "Login/Signup"} </span>
    </CustomButton>
  );
};

export default Auth;
