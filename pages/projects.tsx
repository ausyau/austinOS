import {Header} from "../src/components/Header";
import {NavBar} from "../src/components/Navigation/NavBar";

const Projects = () => {
  return (
    <div className="flex flex-row flex-1 min-h-screen bg-primary">
      <Header />
      <NavBar />
      <div className="flex flex-col items-center justify-around flex-1 mt-20 font-mono text-primary">
        <div className="w-5/12 ">Hallo</div>
      </div>
    </div>
  );
};

export default Projects;
