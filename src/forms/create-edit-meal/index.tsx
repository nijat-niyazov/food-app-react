import { MySpinner } from "@/assets/icons";
import { CustomButton } from "@/components/ui";
import { supabase } from "@/constants/supabase";
import { snakeCase } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MealDescription, MealOptions, MealTitle } from "./sections";
import MealImageSecond from "./sections/image/second";

export type Option = { name: string; price: number };

type Inputs = { category_name: string; img: File; title: string; description: string; options: Option[] };

type FinalData = {
  category_name: string;
  category_id: string;
  img: string;
  title: string;
  description: string;
  options: Array<Option & { id: string }>;
};

type FormProps = { editMode?: undefined } | { editMode: true; defaultValues: FinalData & { id: number } };

const defaultOptions = { options: [{ name: "", price: 0 }] };
// const defaultOptions = { category_name: "", img: "", options: [{ name: "", price: 0 }] };

async function getCategories() {
  return await supabase.from("menu_categories").select("*");
}

const CreateMealForm = (props: FormProps) => {
  const { data: categories } = useQuery({ queryKey: ["categories"], queryFn: getCategories });

  /* ------------------------------ RH Form State ----------------------------- */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
    getValues,
    reset,
    setValue,
    control,
    getFieldState,
    trigger,
  } = useForm<any>({ defaultValues: Object.assign({}, defaultOptions, props.editMode ? props.defaultValues : {}) });

  //   /* ------------------------------ Handling Data ----------------------------- */
  //   const { img, category_name, options, ...rest } = data;

  //   console.log(data);

  //   // const newCategory = { category_id: snakeCase(category_name), category_name };
  //   const newCategory = { category_id: snakeCase("snacks"), category_name: "Snacks" };
  //   const optionsWithId = options.map((option) => ({ id: snakeCase(option.name), ...option }));

  //   const finalData: FinalData = { ...rest, ...newCategory, options: optionsWithId, img: props.editMode ? props.defaultValues.img : "" };

  //   // /* ------------------ Upload new image if not defaultImage ------------------ */

  //     if (typeof img !== "string") {
  //       const { data, error } = await supabase.storage
  //         .from("menu")
  //         .upload(`${img.name}_${finalData.title.toLowerCase()}`, img, { upsert: true });
  //       if (error) {
  //         return toast.error("Couldn't upload image");
  //       } else {
  //         finalData.img = data?.path;
  //       }
  //     } else {
  //       return Promise.resolve(null);
  //     }

  //   /* -------------------------------------------------------------------------- */
  //   /*                             Adding new category                            */
  //   /* -------------------------------------------------------------------------- */

  //   /* ----------------------- Checking if category exists ---------------------- */
  //   const { data: existingCategory, error: categoryError } = await supabase
  //     .from("menu_categories")
  //     .select("*")
  //     .eq("name", newCategory.category_name);

  //   /* -------------------------- Adding if not exists -------------------------- */
  //   if (!categoryError && !existingCategory.length) {
  //     const { error: categoryError } = await supabase.from("menu_categories").insert(newCategory);
  //     if (categoryError) {
  //       return toast.error("Couldn't create category");
  //     }
  //   }

  //   /* ---------------------- Add or update meal in database --------------------- */
  //   let actionError;
  //   if (props.editMode) {
  //     /* --------------------------- Edit existing item --------------------------- */

  //     const { error } = await supabase.from("menu").update(finalData).eq("id", props.defaultValues.id);
  //     console.log(error);
  //     actionError = error;
  //   } else {
  //     /* ------------------------------ Add new item ------------------------------ */

  //     const { error } = await supabase.from("menu").insert(finalData);
  //     actionError = error;
  //   }

  //   if (actionError) {
  //     const action = props.editMode ? "update" : "create";
  //     return toast.error(`Couldn't ${action} meal`);
  //   } else {
  //     const message = props.editMode ? "Meal updated successfully" : "Meal created successfully";
  //     toast.success(message);
  //     window.location.reload();
  //   }
  // };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    /* ------------------------------ Handling Data ----------------------------- */
    const { img, category_name, options, ...rest } = data;

    // const newCategory = { category_id: snakeCase(category_name), category_name };
    const newCategory = { category_id: snakeCase("fast food"), category_name: "Fast food" };
    const optionsWithId = options.map((option) => ({ id: snakeCase(option.name), ...option }));

    const finalData: FinalData = { ...rest, ...newCategory, options: optionsWithId, img: props.editMode ? props.defaultValues.img : "" };

    /* ------------------ Upload new image if not defaultImage ------------------ */
    async function uploadPhoto() {
      const { data, error } = await supabase.storage
        .from("menu")
        .upload(`${img.name}_${finalData.title.toLowerCase()}`, img, { upsert: true });

      if (error) {
        return toast.error("Couldn't upload image");
      } else if (!error && data) {
        finalData.img = data.path;
      }
    }

    if (typeof img !== "string") {
      await uploadPhoto();
    }

    const promises: Promise<any>[] = [];

    /* ----------------------- Checking if category exists ---------------------- */
    const { data: existingCategory, error: categoryError } = await supabase
      .from("menu_categories")
      .select("*")
      .eq("category_name", newCategory.category_name);

    /* -------------------------- Adding if not exists -------------------------- */
    if (!categoryError && !existingCategory.length) {
      async function insertCategory() {
        return await supabase.from("menu_categories").insert(newCategory).select();
      }

      promises.push(insertCategory());
    }

    /* ---------------------- Add or update meal in database --------------------- */
    if (props.editMode) {
      const updateItem = async () => await supabase.from("menu").update(finalData).eq("id", props.defaultValues.id).select();
      promises.push(updateItem());
    } else {
      const addItem = async () => await supabase.from("menu").insert(finalData).select();
      promises.push(addItem());
    }

    const results = await Promise.all(promises);

    let happenedError = false;

    for (const result of results) {
      if (result?.error) {
        happenedError = true;
        console.log(result.error);
        const action = props.editMode ? "updated" : "created";
        return toast.error(`Couldn't ${action} meal`);
      }
    }

    if (!happenedError) {
      const message = props.editMode ? "Meal updated successfully" : "Meal created successfully";
      toast.success(message);
      window.location.reload();
    }
  };

  const defaultImage = props.editMode ? props.defaultValues.img : "";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
      <MealImageSecond control={control} defaultImage={defaultImage} />

      {/* <MealCategories statCategories={categories?.data ?? []} setValue={setValue} register={register} />
       <MealCategoriesSec control={control} statCategories={categories?.data ?? []} /> */}

      <MealTitle register={register} />

      <MealDescription register={register} />

      <MealOptions register={register} control={control} />

      <CustomButton disabled={!isValid || isSubmitting} variant="secondary" type="submit">
        {!isSubmitting ? !props.editMode ? "Create new meal" : "Save changes" : <MySpinner />}
      </CustomButton>
    </form>
  );
};

export default CreateMealForm;
