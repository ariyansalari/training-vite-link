import NavEl from "../../utils/NavEL";
const Login = () => {
    const Login=NavEl({
        element:"div",
        style:"widht:100wh;height:100vh",
        className:"flex",
        children:[NavEl({
            element:"a",
            style:"right:0",
            className:"absolute p-4",
            href:"/",
            children:NavEl({
                element:"img",
                src:"../public/photo/Home 3.png",
                
            })
        }),NavEl({
            element:"img",
            src:"../public/photo/undraw_My_notifications_re_ehmk.png"
        }),NavEl({
            element:"form",
            className:"flex flex-col justify-center",
            children:[NavEl({
                element:"div",
                className:"flex p-2",
                children:[NavEl({
                    element:"img",
                    src:"../public/photo/Profile 1.png"
                }),NavEl({
                    element:"input",
                    type:"text",
                   
                    placeholder:"Username"

                })]
            }),NavEl({
                element:"div",
                className:"flex p-2",
                children:[NavEl({
                    element:"img",
                    src:"../public/photo/Lock 1.png"
                }),NavEl({
                    element:"input",
                    type:"password",
                   
                    placeholder:"Password"

                })]
            }),NavEl({
                element:"input",
                type:"submit",
                value:"Login",
                style:"cursor:pointer",
                className:"bg-red-700 rounded mt-4 "
            })]
        })]
    })
    return Login;
}
 
export default Login;