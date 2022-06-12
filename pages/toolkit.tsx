import {Header} from "../src/components/Header";
import {NavBar} from "../src/components/Navigation/NavBar";

import {Disclosure, Dialog, Transition} from "@headlessui/react";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// function MyDialog({open, setIsOpen}) {
//   return (
//     <Dialog
//       open={open}
//       onClose={() => setIsOpen(false)}
//       className="absolute relative z-50"
//     >
//       <div className="fixed inset-y-0 right-0 flex justify-end m-10 ">
//         <Dialog.Panel className="w-full max-w-sm bg-white rounded">
//           <Dialog.Title>Complete your order</Dialog.Title>
//           <div className="h-screen">Test</div>
//           {/* ... */}
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// }

const ProductivityContent = () => {
  return (
    <div>
      <div>Computers</div>
      <p>Desktop PC: Blah blah blah</p>
      <p>Laptop: Blah blah blah</p>
    </div>
  );
};
const General = () => {
  return (
    <Disclosure>
      {({open}) => (
        <>
          <Disclosure.Button>
            <div className={"font-thin text-secondary"}>
              General Productivity
            </div>
          </Disclosure.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>
              {" "}
              <ProductivityContent />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const ToolKit = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-row flex-1 min-h-screen bg-primary">
      <Header />
      <NavBar />
      {/* <MyDialog open={isOpen} setIsOpen={setIsOpen} /> */}
      <div className="flex flex-col items-center justify-start flex-1 mt-20 font-mono text-primary">
        <div className="w-5/12 ">
          <p className="pb-4">
            I'm a total gearhead - and I have more stuff than I'd like to admit
            :sweat smile:. People often ask me about the different tools that I
            use. Here's a comprehensive list of all of them pertaining to each
            category with my opinions as well. I hope to eventually make videos
            covering each one. Disclaimer: some of the links to hardware are
            affiliate links.
          </p>

          {/* <button onClick={onClick}>Toggle</button> */}
          <div>
            <FontAwesomeIcon size="3x" icon={["fab", "twitter"]} inverse />
          </div>
          <General />
          <div>General Productivity</div>
          <p>Craft & Notion</p>
          <p>Hardware: 2018 16" MacbookPro w/ 2.9 GHz 6-Core Intel Core i9</p>
          <p>Main Computer: Monitors</p>
          <div>Software Engineering</div>
          <p>Editor: Visual Studio Code</p>
          <p>Tools: iTerm, Postman, Insomnia, TablePlus, Rectangle</p>
          <div>Photography, Videography, and YouTube</div>
          <p>Sony a7iii, 24-35 GM, 70-200m M, </p>
          <p>
            Shure SM7B, Elgato Wave, Elgato Streamdeck, Tc Helion GoXlr Mini,{" "}
          </p>
          <p>Premiere Pro, Lightroom</p>
          <div>Skiing</div>
          <p>20XX Black Crows Atris, Nocta</p>
          <div>Cycling</div>
          <p>Specialized Tarmac Pro </p>
        </div>
      </div>
    </div>
  );
};

export default ToolKit;
