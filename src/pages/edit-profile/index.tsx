import { supabase } from "@/constants/supabase";
import { UserInterface } from "@/constants/types/auth";
import { EditProfileForm } from "@/forms";
import { useGetData } from "@/hooks";
import { useEffect } from "react";

async function fetchUser() {
  return await supabase.auth.getUser();
}

const EditProfile = () => {
  const { data, isPending } = useGetData<{ data: { user: UserInterface } }>(["user"], fetchUser);

  useEffect(() => {
    const { data: imageData } = supabase.storage.from("images").getPublicUrl("avatars/girl.jpg");

    console.log(imageData, data?.data.user.user_metadata.avatar);
  }, []);

  if (isPending) {
    return <div>Loading...</div>;
  } else if (!isPending && data?.data.user) {
    const { user } = data.data;

    const userData = {
      // id: user.id,
      name: user.user_metadata.name,
      lastName: user.user_metadata.lastName,
      email: user.email,
      avatar: user.user_metadata.avatar,
    };

    return <EditProfileForm user={userData} />;
  }
};

export default EditProfile;
