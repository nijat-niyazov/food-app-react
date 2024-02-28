import { CustomButton } from "@/components";
import { supabase } from "@/constants/supabase";
import { useGetData } from "@/hooks";

async function getData() {
  return await supabase.from("faqdata").select("*");
}

const FaqContent = () => {
  const { data, isPending, error } = useGetData(["faqData"], getData);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-3 grid-cols-3 container my-10">
      {data?.data?.map((d, i) => (
        <div key={i}>
          <ul>
            <li className="border-1  p-2 rounded-md" key={d.id}>
              <h3>{d.question}</h3>
              <ul className="grid gap-2 list-decimal pl-6">
                {d.answers.map((answer, i) => (
                  <li key={i}>{answer.key}</li>
                ))}
              </ul>
            </li>
          </ul>
          <CustomButton variant="primary">Edit</CustomButton>
        </div>
      ))}
    </div>
  );
};

export default FaqContent;
