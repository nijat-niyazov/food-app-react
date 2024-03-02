import { login, pp } from "@/assets/images";
import { StorageImage } from "@/components";
import { CustomButton } from "@/components/ui";
import DropdownMenu from "@/components/ui/dropdown";
import { UserType } from "@/constants/types/auth";
import { LoginForm } from "@/forms";
import useAuth from "@/hooks/auth/useAuth";
import { signOut } from "@/services/api/auth";
import { openModal } from "@/stores/modal";
import { cn } from "@/utils";
import { Menu } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";

function Triggerer({ userData }: { userData: UserType }) {
  return (
    <div className="rounded-full flex items-center justify-between gap-3 bg-primary px-3 py-2 text-white group">
      <StorageImage src={userData.avatar} defaultImage={pp} alt="avatar" className="w-11 h-11 object-cover rounded-full" />

      <span className="text-lg font-medium  group-hover:underline">{`  ${userData.name} ${userData.lastName} `}</span>
    </div>
  );
}

const menuItems = [
  {
    name: "Edit Profile",
    url: "/edit-profile",

    activeIcon: <EditActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
    inActiveIcon: <EditInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    name: "Order History",
    url: "/order-history",

    activeIcon: <DuplicateActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
    inActiveIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
        />
      </svg>
    ),
  },
  {
    name: "Admin Panel",
    url: "/admin",
    privateRoute: true,
    activeIcon: <ArchiveActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
    inActiveIcon: <ArchiveInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
];

const Auth = ({ userData }: { userData: UserType | null }) => {
  if (!userData) {
    return (
      // <Link onClick={() => openModal(<LoginForm />)} to={`?openModal=true`}>
      <CustomButton
        onClick={() => openModal(<LoginForm />)}
        variant={"black"}
        borderRadius="full"
        className="!pr-4 !pl-2 group hidden !py-2 md:flex items-center gap-4 w-auto"
      >
        <img src={login} alt="pp" className="w-11 h-11 object-cover" />

        <span className="text-lg font-medium  group-hover:underline">Login/Signup </span>
      </CustomButton>
      // </Link>
    );
  }

  const navigate = useNavigate();
  const { logOut } = useAuth();

  async function handleLogout() {
    const { error } = await signOut();
    if (!error) {
      logOut();
      navigate("/", { replace: true });
    }
  }

  return (
    <DropdownMenu triggerer={<Triggerer userData={userData} />}>
      <div className="px-1 py-1 ">
        {menuItems.map(({ url, name, activeIcon, inActiveIcon, privateRoute }) => {
          const isAdmin = userData.role === "admin";
          return isAdmin ? (
            <Menu.Item key={name}>
              {({ active }) => (
                <Link
                  to={url}
                  className={cn("group flex w-full items-center rounded-md px-2 py-2 text-sm", {
                    "bg-violet-500 text-white": active,
                    "text-gray-900": !active,
                  })}
                >
                  {active ? activeIcon : inActiveIcon}
                  {name}
                </Link>
              )}
            </Menu.Item>
          ) : (
            !privateRoute && (
              <Menu.Item key={name}>
                {({ active }) => (
                  <Link
                    to={url}
                    className={cn("group flex w-full items-center rounded-md px-2 py-2 text-sm", {
                      "bg-violet-500 text-white": active,
                      "text-gray-900": !active,
                    })}
                  >
                    {active ? activeIcon : inActiveIcon}
                    {name}
                  </Link>
                )}
              </Menu.Item>
            )
          );
        })}
      </div>
      <div className="px-1 py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={handleLogout}
              className={cn("group flex w-full items-center rounded-md px-2 py-2 text-sm", {
                "bg-violet-500 text-white": active,
                "text-gray-900": !active,
              })}
            >
              {active ? (
                <MoveActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <MoveInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              )}
              Sign out
            </button>
          )}
        </Menu.Item>
      </div>
    </DropdownMenu>
  );
};

export default Auth;

function EditInactiveIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function EditActiveIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DuplicateInactiveIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H12V12H4V4Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DuplicateActiveIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H12V12H4V4Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function ArchiveInactiveIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="10" height="8" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <rect x="4" y="4" width="12" height="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="10" height="8" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
      <rect x="4" y="4" width="12" height="4" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
