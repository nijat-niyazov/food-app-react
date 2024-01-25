import { User } from "@/assets/icons";
import { LoginForm } from "@/components/forms";
import { openModal } from "@/stores/modal";

const Auth = () => {
  return (
    <button onClick={() => openModal(<LoginForm />)} className="px-7 md:flex hidden py-4 items-center gap-1 bg-text text-white rounded-full">
      <User />

      <span className="text-lg font-medium ">Login/Signup</span>
    </button>
  );
};

export default Auth;
