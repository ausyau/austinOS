import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
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
  const { route } = useRouter();
  const selectedNavItem = link === route;

  const toggleDropdown = () => {
    setShowHobbies(!showHobbies);
  };

  if (!subItems) {
    return (
      <Link href={link}>
        <li
          className={clsx(
            "p-1 px-4 m-2 mb-6 rounded-xl cursor-pointer",
            selectedNavItem ? "bg-green-400" : "hover:bg-green-400"
          )}
        >
          <a className="items-center flex-1 ">
            <span className="tracking-normal text-white text-l">{label}</span>
          </a>
        </li>
      </Link>
    );
  }

  return (
    <>
      <div className="inline-flex items-center p-3 mr-4 ">
        <button
          className="text-xl tracking-wide text-white"
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
