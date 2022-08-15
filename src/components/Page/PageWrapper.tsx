import { Header } from "../Header";
import { NavBar } from "../Navigation/NavBar";

export const PageWrapper = ({children}) => {

    return (
      <div className="flex flex-row flex-1 min-h-screen bg-primary pb-72 overflow-hidden overscroll-none">
        <Header />
        <NavBar />
        <div className="flex flex-col items-center justify-start flex-1 mt-20 text-primary ">
          <div className="pr-6 xl:mr-0 md:w-8/12 lg:w-7/12 xl:w-6/12 ">
            {children}
          </div>
        </div>
      </div>
    );
  
}