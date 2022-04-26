import React from "react";

import "./Body.css";
import { useState } from 'react'

const Body = () => {

    function enviarEmail(e) {
        e.preventDefault()
        console.log(`Email: ${email}`)
        window.alert("Email Enviado!")
        window.alert(`Seu Email é: ${email}`)
    }

    const [email, SetEmail] = useState()

  return (
    <div className="BodyContainer">
      <h1>Save your Nature for Humanity</h1>
      <h2>Learn more</h2>
      <form action="">
        <input type="email" name="Email" id="Email" placeholder="Email" onChange={(e) => SetEmail(e.target.value)}/>
        <input type="submit" value="Submit" id="Submit" onClick={enviarEmail} />
      </form>
    </div>
  );
};

export default Body;
