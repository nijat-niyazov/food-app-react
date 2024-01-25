import { FormEvent } from "react";

const LoginModal = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="p-4">
      <h4>Login</h4>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input placeholder="email@com" type="text" className="p-2 rounded-full w-full border-1 border-black/50 text-text outline-none" />
        <input type="text" placeholder="Password" className="p-2 rounded-full w-full border-1 border-black/50 text-text outline-none" />
        <button className="bg-secondary p-1 rounded-full w-full font-semibold text-2xl text-white">Submit</button>
      </form>
    </div>
  );
};

export default LoginModal;
