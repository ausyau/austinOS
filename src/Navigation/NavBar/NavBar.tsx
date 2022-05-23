import Link from "next/link";
import { NavItem } from "../NavItem";

const pages = [
  { label: "About Me", link: "/about" },
  { label: "YouTube", link: "/yt" },
  { label: "Projects", link: "/projects" },
  { label: "My Toolit", link: "/toolkit" },
  {
    label: "Hobbies",
    link: "/hobbies",
    subItems: [
      { label: "Cycling", link: "/cycling" },
      { label: "Skiing", link: "/skiing" },
      { label: "Travel & Photography", link: "/travel" },
    ],
  },
  { label: "Wisdom", link: "/wisdom" },
];
// Eventually Take in props
export const NavBar = () => {
  return (
    <>
      <nav className="flex flex-col flex-1 min-h-screen max-w-nav bg-green-300 md">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white h-8 w-8 mr-2"
            >
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
            <span className="text-xl text-white tracking-wide">TalwindCSS</span>
          </a>
        </Link>
        <ul>
          {pages.map(({ label, link, subItems }, index) => {
            return (
              <NavItem
                key={index}
                label={label}
                link={link}
                subItems={subItems}
              />
            );
          })}
        </ul>
      </nav>
    </>
  );
};
