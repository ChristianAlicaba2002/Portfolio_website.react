import { Header } from "./Header.jsx";
import { Link } from "react-router-dom";
import fruit from "../assets//ProjectImg/Fruit.png";
import ProductsImg from "../assets/ProjectImg/ProductsImg.png";
import Banking from "../assets/ProjectImg/Banking.png";
import Grading from "../assets/ProjectImg/Grading.png";
import Job from "../assets/ProjectImg/Job.png";
import { Title } from "./ProjectStyle/Product.module.css";
import { Project1 } from "./ProjectStyle/Product.module.css";
import { Project2 } from "./ProjectStyle/Product.module.css";
import { Project3 } from "./ProjectStyle/Product.module.css";
import { Project4 } from "./ProjectStyle/Product.module.css";
import { Project5 } from "./ProjectStyle/Product.module.css";

// import getProjects from "../hooks/getProjects.jsx"; // custom hooks.

export function Project() {
  //   const data = getProjects();

  //   console.log(data);

  return (
    <>
      <div className="">
        <Header />
      </div>

      <div className="container">
        <h6 className={Title}>Projects</h6>
        <div className={Project1}>
          <h1>
            Project 01 - <span>Fruits System</span>
          </h1>
          <br />
          <p>
            Fruit System is our first project in our <br />
            1st year journey in our <br />
            <b>Computer Programming 2</b>
          </p>
          <img src={fruit} alt="Fruit.img" />
          <br />
        </div>
      </div>

      <div className={Project2}>
        <h1>
          Project 02 - <span>Product System</span>
        </h1>
        <br />
        <p>
          Product System is our second project in our <br />
          1st year journey in our <br />
          <b>Computer Programming 2</b>
        </p>
        <img src={ProductsImg} alt="Product.img" />
      </div>

      <div className={Project3}>
        <h1>
          Project 03 - <span>Banking System</span>
        </h1>
        <br />
        <p>
          Banking System is our third project in our <br />
          1st year journey in our <br />
          <b>Computer Programming 2</b> and this system is our final exam , and
          we <br />
          need to defend this in IT industry people.
        </p>
        <img src={Banking} alt="Banking.img" />
      </div>

      <div className={Project4}>
        <h1>
          Project 04 - <span>Grading System</span>
        </h1>
        <br />
        <p>
          Grading System is my personal system I made , The reason why I make
          this because It's boring <br />
          and looking for fun.
        </p>
        <img src={Grading} alt="Grading.img" />
      </div>
      <br />

      <div className={Project5}>
        <h1>
          Project 05 - <span>Job Order System</span>
        </h1>
        <br />
        <p>
          Job Order System is my personal system I made as well , The reason why
          I make this because It's boring <br />
          and looking for fun.
        </p>
        <img src={Job} alt="Job.img" />
      </div>
      <br />
    </>
  );
}
