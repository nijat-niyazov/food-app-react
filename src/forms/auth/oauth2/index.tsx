import { CustomButton } from "@/components/ui";
import { supabase } from "@/constants/supabase";
import { Fragment } from "react";

const Oauth2 = ({ ...providers }: { providers?: string[] }) => {
  async function handleOAuth() {
    let { data, error } = await supabase.auth.signInWithOAuth({
      // provider: "github",
      provider: "google",
      // options: {
      //   redirectTo: "https://pcwpuipcmxaawwpivthd.supabase.co/auth/v1/authorize?provider=google",
      // },
    });

    console.log(data, error);
  }

  return (
    <Fragment>
      <h3 className="font-bold text-center">Sign in with</h3>
      <div className="flex items-center justify-center gap-3">
        <CustomButton onClick={handleOAuth} variant="secondary">
          Google
        </CustomButton>
        <CustomButton onClick={handleOAuth} variant="secondary">
          Github
        </CustomButton>
      </div>
    </Fragment>
  );
};

export default Oauth2;
