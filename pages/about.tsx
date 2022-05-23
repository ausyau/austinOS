import { NavBar } from "../src/Navigation/NavBar";

const About = () => {
  return (
    <div className="flex flex-row flex-1 font-mono">
      <NavBar />
      <div className="flex flex-col items-center justify-around flex-1">
        <div className="items-start">
          <h1 className="">About</h1>
          <h1>Hi I'm Austin</h1>
        </div>
        <div>meow</div>
      </div>
    </div>
  );
};

export default About;
