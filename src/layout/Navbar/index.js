import NavEl from "../../utils/NavEL";
{/* <div class="ju"></div> */}
const  Navbar = () => {
    const nav=NavEl({
        element:"nav",
        className:"flex justify-between p-4 items-center",
        children:[NavEl({
            element:"img",
            className:"",
            src:"../public/photo/coffe.png",
            style:"width:50px; height:50px"
        }),NavEl({
            element:"ul",
            className:"flex gap-5",
            children:[NavEl({
                element:"li",
                className:"font-semibold",
                innerText:"Home"
            }),NavEl({
                element:"li",
                className:"font-semibold",
                innerText:"About"
            }),NavEl({
                element:"li",
                className:"font-semibold",
                innerText:"Menu"
            }),NavEl({
                element:"li",
                className:"font-semibold",
                innerText:"Review"
            }),NavEl({
                element:"a",
                href:"/Login",
                className:"font-semibold",
                innerText:"Login"
            })]
        })]
    
    })
    return nav;
}


export default  Navbar;