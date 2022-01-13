import Navigo from "navigo";
import HomePage from "../pages/home";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Dashboard from "../pages/admin/dashboard";
const router = new Navigo("/",{linksSelector:"a"}); 

const render = (content) =>{
  document.getElementById('main').innerHTML = content.print();
}

router.on({
  "/": () => {
    render(HomePage)
  },
  "signin": () => {
    render(Signin)
  },
  "signup": () => {
    render(Signup)
  },
  "dashboard": () => {
    render(Dashboard)
  }

})

router.resolve();