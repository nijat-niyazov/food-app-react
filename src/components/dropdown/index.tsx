import { useLocalStorage } from "@/hooks";
import { signOut } from "@/services/api/auth";
import { cn, removeCookie } from "@/utils";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Edit Profile",
    url: "/edit-profile", // You might replace this with an actual URL
    activeIcon: <EditActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
    inActiveIcon: <EditInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    name: "Order History",
    url: "#", // You might replace this with an actual URL
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
  // {
  //   name: "Archive",
  //   url: "#", // You might replace this with an actual URL
  //   activeIcon: <ArchiveActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  //   inActiveIcon: <ArchiveInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  // },
  // {
  //   name: "Move",
  //   url: "#", // You might replace this with an actual URL
  //   activeIcon: <MoveActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  //   inActiveIcon: <MoveInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  // },
  // {
  //   name: "Delete",
  //   url: "#", // You might replace this with an actual URL
  //   activeIcon: <DeleteActiveIcon className="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />,
  //   inActiveIcon: <DeleteInactiveIcon className="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />,
  // },
];

function DropdownMenu({ children }: { children: ReactNode }) {
  const { removeItem } = useLocalStorage("user");

  async function handleLogout() {
    const { error } = await signOut();

    if (!error) {
      removeCookie("token");
      removeItem();
      toast.success("You logged out successfully");
      setTimeout(() => {
        window.location.reload();
      }, 250);
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>{children}</Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-20">
          <div className="px-1 py-1 ">
            {menuItems.map(({ url, name, activeIcon, inActiveIcon }, i) => (
              <Menu.Item key={i}>
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
            ))}
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
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownMenu;

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
