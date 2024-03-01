import { login, pp } from "@/assets/images";
import { StorageImage } from "@/components";
import DropdownMenu from "@/components/dropdown";
import { CustomButton } from "@/components/ui";
import { UserType } from "@/constants/types/auth";
import { LoginForm } from "@/forms";
import { openModal } from "@/stores/modal";

const Auth = ({ userData }: { userData: UserType | null }) => {
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
          <StorageImage src={userData.avatar} defaultImage={pp} alt="avatar" className="w-11 h-11 object-cover rounded-full" />

          <span className="text-lg font-medium  group-hover:underline">{`  ${userData.name} ${userData.lastName} `}</span>
        </div>
      </DropdownMenu>
    );
  }

  return content;
};

export default Auth;
