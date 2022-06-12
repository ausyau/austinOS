import clsx from "clsx";
import Link from "next/link";
import {useRouter} from "next/router";
import {FaIcon} from "../../../assets/icons";

import {useNavigationContext} from "../../../context/NavigationContext";

export interface NavItemProps {
  label: string;
  link: string; // This should eventually become like navigation links only
  iconname?: any; // Update!
  subItems?: NavItemProps[];
}

export const NavItem = ({
  label,
  link,
  iconname,
  subItems,
}: NavItemProps): JSX.Element => {
  const {showHobbies, setShowHobbies} = useNavigationContext();
  const {route} = useRouter();
  const selectedNavItem = link === route;

  const toggleDropdown = () => {
    setShowHobbies(!showHobbies);
  };

  if (!subItems) {
    return (
      <Link href={link}>
        <li className={clsx("navItem", selectedNavItem && "selected")}>
          <FaIcon className="pr-3 text-primary" iconname={iconname} />
          <a className="items-center">
            <span className="text-sm tracking-normal text-primary">
              {label}
            </span>
          </a>
        </li>
      </Link>
    );
  }

  return (
    <>
      <div className="inline-flex items-center p-1 px-4 mb-4 mr-2">
        <button
          className="text-sm tracking-normal text-primary"
          onClick={toggleDropdown}
        >
          <span className="flex flex-row">
            {label}
            <FaIcon
              className="cursor-pointer text-primary"
              iconname={
                showHobbies ? "circle-arrow-down" : "circle-arrow-right"
              }
            />
          </span>
        </button>
      </div>
      {showHobbies
        ? subItems.map(({label, link, iconname}, index) => {
            const key = `${label}-${index}`;
            return (
              <NavItem
                key={key}
                label={label}
                link={link}
                iconname={iconname}
              />
            );
          })
        : null}
    </>
  );
};
