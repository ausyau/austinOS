import {Header} from "../src/components/Header";
import {NavBar} from "../src/components/Navigation/NavBar";

const ToolKit = () => {
  return (
    <div className="flex flex-row flex-1 min-h-screen bg-primary">
      <Header />
      <NavBar />
      <div className="flex flex-col items-center justify-around flex-1 mt-20 font-mono text-primary">
        <div className="w-5/12 ">
          <p className="pb-4">
            People often ask me about the different tools that I use. Here's a
            comprehensive list of all of them pertaining to each category with
            my opinions as well. I hope to eventually make videos covering each
            one. Disclaimer: links to any hardware are affiliate links.
          </p>
          <div>Software Engineering</div>
          <p>Hardware: 2018 16" MacbookPro w/ 2.9 GHz 6-Core Intel Core i9</p>
        </div>
      </div>
    </div>
  );
};

export default ToolKit;
