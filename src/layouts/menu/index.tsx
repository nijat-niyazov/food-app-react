import { BasketDev } from "@/components/";
import { Categories, LandingMenu } from "@/sections/menu";
import { Outlet } from "react-router-dom";

// let tabs = [
//   { id: "world", label: "World" },
//   { id: "ny", label: "N.Y." },
//   { id: "business", label: "Business" },
//   { id: "arts", label: "Arts" },
//   { id: "science", label: "Science" },
// ];

const MenuLayout = () => {
  // let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className=" mb-10">
      <LandingMenu />

      {/* <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative rounded-full px-3 py-1.5 text-sm font-medium text-red-300 outline-sky-400 transition focus-visible:outline-2",
              { "hover:text-white/60": activeTab === tab.id }
            )}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-gray-800 mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div> */}

      <div className="grid md:grid-cols-[1fr_2fr_1fr] items-start justify-start container gap-5">
        <Categories />
        <Outlet />
        <aside className="hidden md:block">
          <BasketDev />
        </aside>
      </div>

      {/* <Offers /> */}
    </div>
  );
};

export default MenuLayout;
