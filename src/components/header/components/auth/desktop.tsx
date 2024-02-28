import { login } from "@/assets/images";
import { CustomButton } from "@/components";
import DropdownMenu from "@/components/dropdown";
import { LoginForm } from "@/forms";
import { openModal } from "@/stores/modal";
import { AuthProps } from "./type";

const Auth = ({ userData }: AuthProps) => {
  let content: JSX.Element;

  if (!userData) {
    content = (
      // <Link onClick={() => openModal(<LoginForm />)} to={`?openModal=true`}>
      <CustomButton
        onClick={() => openModal(<LoginForm />)}
        variant={"black"}
        borderRadius="full"
        className="!pr-4 !pl-2 group hidden !py-2 md:flex items-center gap-4 w-auto"
      >
        <img src={login} alt="pp" className="w-11 h-11 object-cover" />

        <span className="text-lg font-medium  group-hover:underline">Login/Signup </span>
      </CustomButton>
      // </Link>
    );
  } else {
    content = (
      <DropdownMenu>
        <div className="rounded-full flex items-center justify-between gap-3 bg-primary px-3 py-2 text-white group">
          {/* <span className="text-lg font-medium  group-hover:underline">{`  ${userData.user.name} ${userData.user.lastName} `}</span> */}
          {/* <img src={userData.user.avatar_url} alt="pp" className="w-11 h-11 object-cover rounded-full" />
          <span className="text-lg font-medium  group-hover:underline">{`  ${userData.user.full_name} ${userData.user.lastName} `}</span> */}
        </div>
      </DropdownMenu>
    );
  }

  return content;
};

export default Auth;
