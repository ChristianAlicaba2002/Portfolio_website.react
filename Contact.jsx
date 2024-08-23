import React from "react";
import { Header } from "./Header";
import {formtag} from "./ContactStyle/Contact.module.css";
import {container} from "./ContactStyle/Contact.module.css";
import {contact} from "./ContactStyle/Contact.module.css";
import {email} from "./ContactStyle/Contact.module.css";

export function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "de7c7041-9681-4b4b-be28-77d36e697d78");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    //   console.log("Success", res);
        alert("Sent Successfully!!",res);
    }
  };

  return (
        <>
        <Header />
            <form onSubmit={onSubmit} className={formtag}>
                <div className={container}>
                    <label className={contact}>Contact</label>
                    <input type="text" name="firstname" placeholder="Your Firstname" required/>
                    <input type="text" name="lastname" placeholder="Your Lastname" required/>
                    <input className={email} type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" placeholder="Please send me some beautiful feedback"></textarea>
                    <button type="submit">Submit</button>
                </div>
               
            </form>
        </>
       
  );
}
