import clsx from "clsx";
import {Header} from "../src/components/Header";
import {NavBar} from "../src/components/Navigation/NavBar";

const Description = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-end mb-12">
      <label className="w-1/12 text-right">About</label>
      <div className="flex flex-col flex-1 pl-6">
        <p className="pb-4">
          Hi I’m Austin. I am a software engineer, skier, cyclist, hobbyist
          YouTuber, and ultra amateur photographer. I currently reside in San
          Francisco with my wife and two dogs. Right now, I’m helping X with Y.
        </p>
        <p className="pb-4">
          Prior to X, I worked at another startup, and before that, I was a
          product manager at Visa. I actually got into Software Engineering late
          in the game and spent my earlier years on the business side of things.
        </p>
        <p className="pb-4">
          Thanks for visting AustinOS. I made this site to share with you
          several things that occupy my time and showcase a lot of who I am -
          hobbies, side projects, and work. This site is also my playground for
          fooling around with new technologies (sorry if you encounter a bug!)
        </p>
        <p className="pb-4">
          Feel free to poke around and check things out. The source code is all
          publicly available so if you want to steal it, that’s fine. Just give
          me some credit ;).
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
  ];
  return (
    <div className="flex flex-row justify-end mb-12">
      <label className="w-1/12 text-right">Socials</label>
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
      company: "Something",
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
    <div className="flex flex-row justify-end mb-12">
      <label className="w-1/12 text-right">Work</label>
      <div className="flex flex-col flex-1 pl-6">
        {roles.map(({company, positions}) => {
          return (
            <>
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
            </>
          );
        })}
      </div>
    </div>
  );
};

const About = (): JSX.Element => {
  return (
    <div className="flex flex-row flex-1 min-h-screen bg-primary">
      <Header />
      <NavBar />
      <div className="flex flex-col items-center justify-around flex-1 mt-20 font-mono text-primary">
        <div className="w-5/12 ">
          <Description />
          <Social />
          <Work />
        </div>
      </div>
    </div>
  );
};

export default About;
