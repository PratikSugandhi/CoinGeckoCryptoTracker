import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout()
{
    return(
        <>
             <Navbar />
               {/* this is the portion where shared part must present,
                 below is then placeholder where the page that is rendering along with the shared portion is replace. */}
            <Outlet />

        </>
    )
   
}
export default MainLayout;