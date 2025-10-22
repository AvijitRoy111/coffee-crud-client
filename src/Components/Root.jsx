// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";


const Root = () => {
     return (
          <div className="flex flex-col min-h-screen">
               <Header></Header>
               <div className="flex flex-grow">
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default Root;