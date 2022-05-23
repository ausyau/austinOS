import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import NavigationContext from "../../context/NavigationContext";

interface NavItemProps {
  label: string;
  link: string; // This should eventually become like navigation links only
  subItems?: NavItemProps[];
}

export const NavItem = ({
  label,
  link,
  subItems,
}: NavItemProps): JSX.Element => {
  const { showHobbies, setShowHobbies } = useContext(NavigationContext);
  // const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  console.log("Router", router);
  const toggleDropdown = () => {
    setShowHobbies(!showHobbies);
  };

  if (!subItems) {
    return (
      <li className="hover:bg-green-400 p-2 m-2 rounded-lg">
        <Link href={link}>
          <a className="inline-flex items-center ">
            <span className="text-l text-white tracking-wide">{label}</span>
          </a>
        </Link>
      </li>
    );
  }

  return (
    <>
      <div className="inline-flex items-center p-3 mr-4 ">
        <button
          className="text-xl text-white tracking-wide"
          onClick={toggleDropdown}
        >
          {label}
        </button>
      </div>
      {showHobbies
        ? subItems.map((subItem, index) => {
            const key = `${subItem.label}-${index}`;
            return (
              <NavItem key={key} label={subItem.label} link={subItem.link} />
            );
          })
        : null}
    </>
  );
};
