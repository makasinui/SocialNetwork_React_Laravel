import React from "react"
import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
export default function SocialIndex() {
 return(
     <React.Fragment style="background:black;">
        <Header />
        <main className="container">
            <Navbar />
            <Main />
        </main>
     </React.Fragment>
 )   
}