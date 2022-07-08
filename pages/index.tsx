import type {NextPage} from "next";
import {NavBar} from "../src/components/Navigation/NavBar";
import {Header} from "../src/components/Header";
import clsx from "clsx";
import {Disclosure, Transition} from "@headlessui/react";
import {FaIcon} from "../src/assets/icons";

const Description = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-end mb-12 md:flex-row">
      <label className="w-2/12 pl-6 mb-6 md:pl-0 md:text-right md:mb-0 font-bold xl:font-medium text-gray-200 dark:xl:text-gray-400">
        About
      </label>
      <div className="flex flex-col flex-1 pl-6">
        <p className="pb-4">
          Hi I’m Austin. I am a software engineer, skier, cyclist, hobbyist
          YouTuber, and ultra amateur photographer. I currently reside in San
          Francisco with my wife and two dogs. Right now, I’m working at
          FormSwift where I focus on improving of the experience of their PDF
          platform.
        </p>
        <p className="pb-4">
          Prior to FormSwift, I worked at another startup, and before that, I
          was a product manager at Visa. I actually got into Software
          Engineering rather late in the game because I spent my earlier years
          on the business side of things.
        </p>
        <p className="pb-4">
          Thanks for visting AustinOS. I made this site to share with you
          several things that occupy my time and showcase a lot of who I am -
          hobbies, side projects, and work. This site is also my playground for
          fooling around with new technologies (sorry if you encounter a bug!)
        </p>
        <p className="pb-4">
          Feel free to poke around and check things out. After releasing an MVP,
          I am going to work on making sure the changelog below links to commits
          to reflect that change. The source code is all publicly available so
          if you want to steal it, that’s fine. Just give me some credit ;).
        </p>
      </div>
    </div>
  );
};

const Social = (): JSX.Element => {
  const socials = [
    {name: "Twitter", url: "https://twitter.com/austinyau", action: "Follow"},
    {
      name: "YouTube",
      url: "https://www.youtube.com/c/AustinTech",
      action: "Subscribe",
    },
    {name: "GitHub", url: "https://github.com/ausyau", action: "Follow"},
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ausyau/",
      action: "Connect",
    },
  ];
  return (
    <div className="flex flex-col justify-end mb-12 md:flex-row">
      <label className="w-2/12 pl-6 mb-6 md:pl-0 md:text-right md:mb-0 font-bold xl:font-medium text-gray-200 xl:text-gray-400">
        Socials
      </label>
      <div className="flex flex-col flex-1 pl-6">
        {socials.map(({name, url, action}) => {
          return (
            <div
              key={url}
              className="flex flex-row items-center justify-between pb-4 pr-5"
            >
              <p>{name}</p>
              <span className="w-full mx-4 border-t border-gray-300 border-dashed shrink dark:border-gray-400"></span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {action}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Work = (): JSX.Element => {
  const roles = [
    {
      company: "FormSwift",
      positions: [{title: "Senior Software Engineer", date: "2022 - "}],
    },
    {
      company: "Starship HSA",
      positions: [{title: "Software Engineer", date: "2019 - 2022"}],
    },
    {
      company: "Visa",
      positions: [
        {title: "Product Manager", date: "2018 - 2019"},
        {title: "BizOps", date: "2014 - 2018"},
      ],
    },
    {
      company: "Deloitte",
      positions: [{title: "Strategy Consultant", date: "2013 - 2014"}],
    },
  ];
  return (
    <div className="flex flex-col justify-end mb-12 md:flex-row">
      <label className="w-2/12 pl-6 mb-6 md:pl-0 md:text-right md:mb-0 font-bold xl:font-medium text-gray-200 xl:text-gray-400">
        Work
      </label>
      <div className="flex flex-col flex-1 pl-6">
        {roles.map(({company, positions}) => {
          return (
            <div key={company}>
              <p className="underline whitespace-nowrap">{company}</p>
              {positions.map(({title, date}, index) => {
                return (
                  <div
                    key={`${title}${index}`}
                    className={clsx(
                      "flex flex-row items-center justify-between pr-5",
                      index < positions.length - 1 ? "pb-2" : "pb-8"
                    )}
                  >
                    <p className="whitespace-nowrap">{title}</p>
                    <span className="w-full mx-4 border-t border-gray-300 border-dashed shrink dark:border-gray-400"></span>
                    <p className="whitespace-nowrap">{date}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const GITHUB_BASE_URL = "https://github.com/ausyau/austinOS/commit/";

const ChangeLog = (): JSX.Element => {
  const changelogItems: {
    version: string;
    completedDate: string;
    features: {featureName: string; commit: string}[];
  }[] = [
    {
      version: "Upcoming Features",
      completedDate: "",
      features: [
        {featureName: "Toolkit Section", commit: ""},
        {featureName: "API Layer", commit: ""},
      ],
    },
    {
      version: "0.0.2",
      completedDate: "06/12/22",
      features: [
        {
          featureName: "Digital Ocean Deployment",
          commit: "",
        },
        {
          featureName: "Mobile Layout & Syling",
          commit: "518c67a7a8aa93b90c9a5a15354b5a9514b813ab",
        },
      ],
    },
    {
      version: "0.0.1",
      completedDate: "06/12/22",
      features: [
        {
          featureName: "Dark Mode",
          commit: "c27ca4fa328505a6e252d56265b09d2959df65c8",
        },
        {
          featureName: "Navigation Menu",
          commit: "9330168e7fb2d5e3de1128b18fa83dc0205e05ee",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-end mb-12 md:flex-row">
      <label className="w-2/12 pl-6 mb-6 md:pl-0 md:text-right md:mb-0 font-bold xl:font-medium text-gray-200 xl:text-gray-400">
        Changelog
      </label>
      <div className="flex flex-col flex-1 pl-6">
        {changelogItems.map(
          ({version, completedDate, features}, versionIndex) => {
            return (
              <Disclosure key={versionIndex}>
                {({open}) => (
                  <div className="mb-3">
                    <div className="flex flex-row items-center justify-between pr-5">
                      <Disclosure.Button>
                        <div className="flex flex-row whitespace-nowrap">
                          <FaIcon
                            className="pr-2 text-primary"
                            iconname={
                              open ? "circle-arrow-down" : "circle-arrow-right"
                            }
                          />
                          <p>{version}</p>
                        </div>
                      </Disclosure.Button>
                      <span
                        className={clsx(
                          "w-full mx-4 border-t border-gray-300 border-dashed shrink dark:border-gray-400",
                          !completedDate && "mr-0"
                        )}
                      ></span>
                      {completedDate ? (
                        <div className="flex flex-row whitespace-nowrap">
                          <FaIcon
                            className="pr-2 text-primary"
                            iconname={"square-check"}
                          />
                          <label>{completedDate}</label>
                        </div>
                      ) : null}
                    </div>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel static>
                        {features.map(({featureName, commit}, featureIndex) => {
                          return (
                            <div
                              key={`${featureIndex}-${featureName} `}
                              className="flex flex-row items-center pr-5 ml-3 whitespace-nowrap"
                            >
                              <FaIcon
                                className="pr-2 text-primary"
                                iconname={
                                  versionIndex === 0 ? "square" : "square-check"
                                }
                              />
                              <span className="w-auto">{featureName}</span>
                              <span className="w-full mx-4 border-t border-gray-300 border-dashed shrink dark:border-gray-400"></span>
                              {commit ? (
                                <a
                                  href={`${GITHUB_BASE_URL}${commit}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:underline"
                                >
                                  {commit.slice(0, 7)}
                                </a>
                              ) : null}
                            </div>
                          );
                        })}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            );
          }
        )}
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="flex flex-row flex-1 min-h-screen bg-primary pb-72 overflow-hidden overscroll-none">
      <Header />
      <NavBar />
      <div className="flex flex-col items-center justify-start flex-1 mt-20 text-primary ">
        <div className="pr-6 xl:mr-0 md:w-8/12 lg:w-7/12 xl:w-6/12 ">
          <Description />
          <Social />
          <Work />
          <ChangeLog />
        </div>
      </div>
    </div>
  );
};

export default Home;
