import { logo } from "@/assets/images";

const notifications = [
  {
    title: "We’ve Received your order!",
    message: "Awaiting Restaurant acceptance",
    className: "top-20 left-1/4",
  },
  {
    title: "Order accepted! ✅",
    message: "Your order will be delivered shortly",
    className: "top-60 right-3",
  },
  {
    title: "We’ve Received your order!",
    message: "Awaiting Restaurant acceptance",
    className: "top-96 left-1/3",
  },
];

const Notifications = () => {
  return (
    <div className="w-[550px] z-0 ml-auto h-[90%] rounded-tl-[300px] absolute bottom-0 right-0  w-500 bg-primary hidden md:block">
      <ul className="relative">
        {notifications.map(({ className, message, title }, i) => (
          <li key={i} className={`p-4 rounded-xl bg-white w-[300px] absolute ${className}`}>
            <div className="flex items-center justify-between mb-3">
              <img src={logo} alt="logo" className="w-20 object-cover" />
              <span className="opacity-40 text-sm">now</span>
            </div>
            <p className="font-semibold text-sm">{title}</p>
            <p className="text-sm">{message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
