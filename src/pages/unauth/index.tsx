import { CustomButton } from "@/components";
import { LoginForm } from "@/forms";
import { openModal } from "@/stores/modal";

const UnAuthPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-bold text-4xl bg-red-300 ">
      <div className="grid gap-10">
        Unauthorized <br /> <br /> <br />
        YOu have to login
        <CustomButton variant="primary" onClick={() => openModal(<LoginForm />)}>
          login now
        </CustomButton>
      </div>
    </div>
  );
};

export default UnAuthPage;
