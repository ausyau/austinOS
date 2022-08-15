import type {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from "next";
import {NavBar} from "../src/components/Navigation/NavBar";
import {Header} from "../src/components/Header";
import clsx from "clsx";
import {Disclosure, Transition} from "@headlessui/react";
import {FaIcon} from "../src/assets/icons";
import {formatChangelog, FormattedFeature} from "../src/utils/formatChangelog";
import { PageWrapper } from "../src/components/Page/PageWrapper";

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const LABEL_STYLE =
  "w-2/12 pl-6 mb-6 md:pl-0 md:text-right md:mb-0 font-bold xl:font-medium text-secondary";

const Description = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-end mb-12 md:flex-row">
      <label className={LABEL_STYLE}>About</label>
      <div className="flex flex-col flex-1 px-6">
        <p className="pb-4 text-justify">
          Hi I’m Austin. I am a software engineer, skier, cyclist, hobbyist
          YouTuber, and ultra amateur photographer. I currently reside in San
          Francisco with my wife and two dogs. Right now, I’m working at
          FormSwift where I focus on improving all things form related.
        </p>
        <p className="pb-4 text-justify">
          Prior to FormSwift, I worked at another startup, and before that, I
          was a product manager at Visa. I actually got into Software
          Engineering rather late in the game because I spent my earlier years
          on the business side of things.
        </p>
        <p className="pb-4 text-justify">
          Thanks for visting AustinOS. I made this site to share with you
          several things that occupy my time and showcase a lot of who I am -
          hobbies, side projects, and work. This site is also my playground for
          fooling around with new technologies (sorry if you encounter a bug!)
        </p>
        <p className="pb-4 text-justify">
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
      <label className={LABEL_STYLE}>Socials</label>
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
      <label className={LABEL_STYLE}>Work</label>
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

type ChangeLogItem = {
  version: string;
  features: FormattedFeature[];
};

const ChangeLog = ({changelog}: {changelog: ChangeLogItem[]}): JSX.Element => {
  return (
    <div className="flex flex-col justify-end mb-12 md:flex-row">
      <label className={LABEL_STYLE}>Changelog</label>
      <div className="flex flex-col flex-1 pl-6">
        {changelog.map(({version, features}, versionIndex) => {
          const releaseDate = features[0].featureDate
            ? new Date(features[0].featureDate).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })
            : null;
          return (
            <Disclosure key={versionIndex}>
              {({open}) => (
                <div className="mb-3">
                  <div className="flex flex-row items-center justify-between pr-5">
                    <Disclosure.Button>
                      <div className="flex flex-row whitespace-nowrap">
                        <FaIcon
                          className="pr-2 text-tertiary"
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
                        !releaseDate && "mr-0"
                      )}
                    ></span>
                    {releaseDate ? (
                      <div className="flex flex-row whitespace-nowrap">
                        <FaIcon
                          className="pr-2 text-tertiary"
                          iconname={"square-check"}
                        />
                        <label>{releaseDate}</label>
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
                              className="pr-2 text-tertiary"
                              iconname={
                                versionIndex === 0 ? "square" : "square-check"
                              }
                            />
                            <span className="w-auto">{featureName}</span>
                            <span
                              className={clsx(
                                "w-full border-t border-gray-300 border-dashed shrink dark:border-gray-400",
                                commit ? "mx-4" : "ml-4"
                              )}
                            ></span>
                            {commit ? (
                              <a
                                href={commit}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                {commit.slice(42, 49)}
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
        })}
      </div>
    </div>
  );
};

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {changelog} = data;

  return (
    <PageWrapper>
      
                <Description />
                <Social />
                <Work />
                <ChangeLog changelog={changelog} />

    </PageWrapper>

  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const url =
    "https://api.notion.com/v1/databases/6ceed1f4d0eb446995fbb302970bf0a6/query";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Notion-Version": "2022-02-22",
      Authorization: `Bearer ${NOTION_API_KEY}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "version",
          direction: "descending",
        },
      ],
    }),
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const changelog = formatChangelog(data);

  return {
    props: {data: {changelog}},
  };
};

export default Home;
