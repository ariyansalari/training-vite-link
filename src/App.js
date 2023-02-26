import Navbar from "./layout/Navbar";
import HomePage from "./screens/Home";
import Login from "./screens/Login";
import Error from "./screens/Error";
const  App= () => {

    function router(){

    
    switch(window.location.pathname)
    {
        case "/":return HomePage();
        case "/Login":return Login();
        default: return Error();
    }
    }
    return  router();


}
 
export default App;



