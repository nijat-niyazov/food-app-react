import { Menu, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

type Props = {
  triggerer: ReactNode;
  children: ReactNode;
};

function DropdownMenu({ triggerer, children }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>{triggerer}</Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 min-w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-20">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownMenu;
