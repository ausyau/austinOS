import clsx from "clsx";
import { Header } from "../src/components/Header";
import { NavBar } from "../src/components/Navigation/NavBar";

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
          several things that occupy my time and is a good represention a lot of
          who I am - hobbies, side projects, and work. This site is also my
          playground for fooling around with new technologies (sorry if you
          encounter a bug!)
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
  return (
    <div className="flex flex-row justify-end mb-12">
      <label className="w-1/12 text-right">Social</label>
      <div className="flex flex-col flex-1 pl-6">
        <p className="pb-4">Twitter...............................</p>
        <p className="pb-4">YouTube</p>
        <p className="pb-4">GitHub</p>
      </div>
    </div>
  );
};

const Work = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-end mb-12">
      <label className="w-1/12 text-right">Work</label>
      <div className="flex flex-col flex-1 pl-6">
        <p className="pb-4">Starship HSA................................</p>
        <p className="pb-4">YouTube</p>
        <p className="pb-4">GitHub</p>
      </div>
    </div>
  );
};

const About = (): JSX.Element => {
  return (
    <div className="flex flex-row flex-1">
      <Header />
      <NavBar />
      <div className="flex flex-col items-center justify-around flex-1 font-mono">
        <div className="w-6/12 ">
          <Description />
          <Social />
          <Work />
        </div>
      </div>
    </div>
  );
};

export default About;
