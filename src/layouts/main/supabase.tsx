import { CustomButton } from "@/components/ui";
import { supabase } from "@/constants/supabase";
import { useDebounced } from "@/hooks";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

type Answer = {
  title: string;
  content: string;
};

type Answers = {
  key: string;
  answer: Answer[];
};

type Country = {
  id: number;
  country_name: string;
  city: string;
  population: number;
  language: string;
};

const LearnSupabase = () => {
  const { pathname } = useLocation();
  const [session, setSession] = useState<any>(null);
  // const { isPending, data } = useGetData<{ data: Country[] }>(["faqs"], getData);
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<Country[]>([]);
  const [lastPage, setlastPage] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(1000000000000);
  const debouncedMin = parseInt(useDebounced(`${min}`, 500));
  const debouncedMax = parseInt(useDebounced(`${max}`, 500));

  const [searchParams, setSearchParams] = useSearchParams({
    country_name: "Azerbaijan",
    min: `30000`,
    max: `10000000`,
  });

  useEffect(() => {
    console.log(Object.entries(searchParams.entries()));

    async function getData() {
      let query = supabase.from("countries").select("*");
      const currentPage = page;
      const perPage = currentPage + 1;
      query.range(currentPage, perPage);
      if (selected !== "") {
        query = query.eq("country_name", selected);
      }

      if (debouncedMin !== 0 || debouncedMax !== 1000000000000) {
        query = query.lt("population", debouncedMax).gt("population", debouncedMin);
      }

      const data = await query;

      if ((data.data as Country[]).length < 2) {
        setlastPage(true);
      } else {
        setlastPage(false);
      }
      setData(data.data as Country[]);
    }

    getData();
    // async function test() {
    //   let { data: countries, error } = await supabase.from("countries").select("*");

    //   // from is table name
    //   // select is properties must be shown
    // }
    // test();
  }, [page, selected, debouncedMin, debouncedMax]);

  console.log(lastPage);

  <div>
    <ol className="p-2 rounded-md container border-1 border-black grid gap-3 list-decimal">
      {data?.map((c: Country) => (
        <li key={c.id} className="flex items-center justify-between bg-primary pl-4">
          <span className="w-1/5">{c.country_name}</span>
          <span className="w-1/5">{c.city}</span>
          <span className="w-1/5">{c.population}</span>
          <span className="w-1/5">{c.language}</span>
        </li>
      ))}
    </ol>

    <div className="flex mx-auto w-1/3 items-center gap-3 my-4">
      <CustomButton disabled={lastPage || !page} onClick={() => setPage((p) => p - 2)} variant="secondary">
        Prev
      </CustomButton>
      <CustomButton disabled={lastPage} onClick={() => setPage((p) => p + 2)} variant="primary">
        Next
      </CustomButton>
    </div>
    <div className="flex mx-auto w-1/3 items-center gap-3 my-4">
      <CustomButton disabled={!selected} onClick={() => setSelected("")} variant="secondary">
        Remove
      </CustomButton>
      <CustomButton disabled={selected === "Azerbaijan"} onClick={() => setSelected("Azerbaijan")} variant="primary">
        Azerbaijan
      </CustomButton>
      <CustomButton disabled={selected === "Turkey"} onClick={() => setSelected("Turkey")} variant="primary">
        Turkey
      </CustomButton>
    </div>
    <div className="flex mx-auto w-1/3 items-center gap-3 my-4">
      <CustomButton variant="secondary">Range Pop</CustomButton>
      <input className="p-2 rounded-md border-black border-1" type="text" value={min} onChange={(e) => setMin(parseInt(e.target.value))} />
      <input className="p-2 rounded-md border-black border-1" type="text" value={max} onChange={(e) => setMax(parseInt(e.target.value))} />
    </div>
    <div className="flex mx-auto w-1/3 items-center gap-3 my-4">
      <CustomButton disabled={!selected} onClick={() => setSelected("")} variant="secondary">
        Range
      </CustomButton>
      {/* <CustomButton disabled={selected === "Azerbaijan"} onClick={() => setSelected("Azerbaijan")} variant="primary">
            Azerbaijan
          </CustomButton>
          <CustomButton disabled={selected === "Turkey"} onClick={() => setSelected("Turkey")} variant="primary">
            Turkey
          </CustomButton> */}
    </div>
  </div>;

  return <div>LearnSupabase</div>;
};

export default LearnSupabase;
