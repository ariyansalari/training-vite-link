import NavEl from "../../utils/NavEL";
import Navbar from "../../layout/Navbar";
const  HomePage= () => {
    const main=NavEl({
        element:"div",
        children:Navbar()
    })
    return main;
}
 
export default HomePage;