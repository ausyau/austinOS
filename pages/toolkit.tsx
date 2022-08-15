import {Header} from "../src/components/Header";
import {NavBar} from "../src/components/Navigation/NavBar";

import {Disclosure, Transition, Tab} from "@headlessui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { PageWrapper } from "../src/components/Page/PageWrapper";

// This page will be tabs of different groupings
// Software, Hardware, Activites
// Inside each, there will be a group
// Clicking an item will open a modal on Desktop that shows more information

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
      {() => (
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

const TabTest = () => {
  const TabListSections = [
    {name: 'Engineering'},
    {name: 'Hardware'},
    {name: 'Health'},
    {name: 'Apps'},

  ]

  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        {TabListSections.map((section, index) => {
          return (
            <Tab key={index} className={({ selected }) =>
            clsx(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )
          }>{section.name}</Tab>
          )
        })}
 

      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

const ToolKit = () => {
  // const [isOpen, setIsOpen] = useState(true);
  // const onClick = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <PageWrapper>

      <p className="pb-4">
        I’m a total gearhead - and I have more stuff than I’d like to admit
        :sweat smile:. People often ask me about the different tools that I
        use. Here’s a comprehensive list of all of them pertaining to each
        category with my opinions as well. I hope to eventually make videos
        covering each one. Disclaimer: some of the links to hardware are
        affiliate links.
      </p>

      {/* <button onClick={onClick}>Toggle</button> */}
      <div>
        <FontAwesomeIcon size="3x" icon={["fab", "twitter"]} inverse />
      </div>
      <TabTest />
      {/* <div>General Productivity</div>
      <p>Craft & Notion</p>
      <p>{`Hardware: 2018 16" MacbookPro w/ 2.9 GHz 6-Core Intel Core i9`}</p>
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
      <p>Specialized Tarmac Pro </p> */}
    </PageWrapper>

  );
};

export default ToolKit;
