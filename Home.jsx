import profile from "../assets/ProjectImg/profile.jpg";
import Html from "../assets/Skills/html.png";
import Css from "../assets/Skills/Css.png";
import Java from "../assets/Skills/java.jpg";
import Javascript from "../assets/Skills/javascript.jpg";
import Python from "../assets/Skills/python.jpg";
import React from "../assets/Skills/react.jpg";
import {Link} from "react-router-dom";
import "./forStyling/Home.css";
import { Header } from "./Header.jsx";

export function Home(){

    return(
            <>
                <Header />
                <main style={{marginBottom:"10%"}}>
                    <div className="container">
                        <img className="profile" src={profile} />

                        <div className="details">
                            <h3>Hello</h3>
                            <label className="labels" htmlFor="">I'm Christian Dave</label><br />
                            <label className="labels" htmlFor="">Get to know me</label>
                            <p>Welcome to my personal website. <br /> Here, I share my journer , experiences <br /> and thoughts it's a space <br />
                            where I express myself and connect with you . <br /> Feel free to explore and discover more about me.</p>
                            <div className="buttons">
                                <Link className="ContactMe" to="/Contact">Contact Me</Link><br />
                                <Link className="Explore" to="/Project">Explore My Projects</Link>
                            </div>
                            <div className="Skills">

                               <a href="https://www.w3schools.com/html/default.asp" target="_blank">
                                    <img title="goes to w3school" className="Html" src={Html} alt="Html.img"/>
                               </a> 
                               
                               <a href="https://www.w3schools.com/css/default.asp" target="_blank">
                                    <img title="goes to w3school" src={Css} alt="Css.img"/>
                               </a>

                               <a href="https://www.w3schools.com/js/default.asp"target="_blank">
                                    <img title="goes to w3school" src={Javascript} alt="Javascript.img"/>
                               </a>

                               <a href="https://www.w3schools.com/java/default.asp" target="_blank">  
                                    <img title="goes to w3school" src={Java} alt="Java.img"/>
                               </a>
                               
                               <a href="https://www.w3schools.com/python/default.asp" target="_blank" >
                                    <img title="goes to w3school" src={Python} alt="Python.img"/>
                               </a>

                               <a href="https://www.w3schools.com/react/default.asp" target="_blank" >
                                    <img title="goes to w3school" src={React} alt="React.img"/>
                               </a>
                            
                            </div>
                            
                        </div>
                    </div>
                </main>
            </>
    );
}