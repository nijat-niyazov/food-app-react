import { CustomButton } from "@/components/ui";
import { supabase } from "@/constants/supabase";
import { CreateMealForm } from "@/forms";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

async function getMeal(id: string) {
  return await supabase.from("menu").select("*").eq("id", id);
}

const EditorPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) return null;

  const { data, isPending } = useQuery({ queryKey: ["meal", id], queryFn: () => getMeal(id) });

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container ">
      <CustomButton variant="transparent" className="underline font-medium w-auto p-1" onClick={() => navigate(-1)}>
        Go Back
      </CustomButton>

      <div className="container md:w-1/3 mx-auto md:mt-10">
        <CreateMealForm editMode defaultValues={data?.data?.at(0)} />
      </div>
    </div>
  );
};
export default EditorPage;
