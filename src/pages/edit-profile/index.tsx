import { supabase } from "@/constants/supabase";
import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";

const EditProfile = () => {
  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
    }
    fetchUser();
  }, []);

  const onSubmit: SubmitHandler<{ email: string }> = async (values) => {
    console.log(values);

    // const { data, error } = await supabase.auth.resetPasswordForEmail(values);

    // console.log({ data, error });

    // if (!error && session && user) {
    //   console.log({ session, user });

    //   toast.success("Sent to you");

    // } else if (error && error.status === 400) {
    //   // setError("password", { message: error.message });
    //   toast.error("Unmatched fields ☹ Please check your inputs.");
    // } else {
    //   toast.error("Something went wrong");
    // }
  };

  return <div>EditProfile</div>;
};

export default EditProfile;
