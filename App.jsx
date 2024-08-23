// import Card from './Card.jsx';
// import Student from "./Student.jsx";
// import UserGreeting from "./UserGreeting.jsx";
// import CounterNumber from './Counter_Number.jsx'/
// import Components from "./Components.jsx";
// import { Car } from "./Car";
// import Food from "./Food.jsx"
// import ToDoList from "./toDoList.jsx";
// import {Styles} from "./My_portfolio/images/portfolio.module.css"
// import { Information } from "./Information.jsx";
// import { Practice } from "./Practice.jsx";
// import {MyClock} from "./MyClock/MyClock.jsx"
// import  Gadgets from "./Gadgets/Gadgets.jsx";
// import Color from "./ColorPicker/Color";
// import { AllCars } from "./AllCars";
// import { CreateAccount } from "./CreateAccount";
// import {Facebook} from "./FacebookPage/Facebook/"
// import { ChangeColor } from "./ChangeColor";
// import { Fetch } from "./fetch";
// import { ArrayObjects } from "./ArrayObjects";
import { Home } from "./HciPortfolio/Home.jsx";
import { Footer } from "./HciPortfolio/Footer.jsx";
import { Project } from "./HciPortfolio/Project.jsx";
import { Contact } from "./HciPortfolio/Contact.jsx";
import {BrowserRouter, Routes , Route} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="/Project" element={<Project /> } />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>


    </>
  );
}
export default App;
