import { useAuth } from "@/stores/auth";

const NotAdmin = () => {
  const { email, password } = useAuth((state) => state);

  if (email === "admin" && password === "admin") {
    console.log("You are admin");
  } else {
    console.log("Not admin");
  }

  return <div className="min-h-screen flex items-center justify-center font-bold text-4xl bg-violet-500">You are not admin</div>;
};

export default NotAdmin;
