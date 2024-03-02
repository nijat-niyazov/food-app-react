import Tabs from "@/components/ui/tabs";
import { supabase } from "@/constants/supabase";
import { UserInterface } from "@/constants/types/auth";
import { EditProfileDetailsForm, EditProfilePrivacyForm } from "@/forms";
import { useGetData, useTabs } from "@/hooks";
import { parseUser } from "@/utils";
import { Fragment } from "react";

async function fetchUser() {
  return await supabase.auth.getUser();
}

const tabs = [
  { title: "User Details", component: EditProfileDetailsForm },
  { title: "Edit Privacy", component: EditProfilePrivacyForm },
];

const EditProfile = () => {
  const { activeTab, handleActiveTab } = useTabs("editProfileTab");

  const { data, isPending } = useGetData<{ data: { user: UserInterface } }>(["user"], fetchUser);

  if (isPending) {
    return <div>Loading...</div>;
  } else if (!isPending && data?.data.user) {
    const { user } = data.data;
    const { email, ...rest } = parseUser(user);

    let defaultValues = {};

    switch (activeTab) {
      case 2:
        defaultValues = { email };
        break;
      default:
        defaultValues = rest;
    }

    return (
      <Fragment>
        <Tabs tabs={tabs.map((component) => component.title)} activeTab={activeTab} handleActiveTab={handleActiveTab} />

        <div className="min-h-[50vh]">
          {tabs.map(
            ({ component: Component }, index) => index + 1 === activeTab && <Component key={index} defaultValues={defaultValues} />
          )}
        </div>
      </Fragment>
    );
  }
};

export default EditProfile;
