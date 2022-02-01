// CORE
import React from "react";
// COMPONENTS
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";

export const Layout = ({width, children}) => {
    return <>
        <Header width={width}/>
        {children}
        <Footer/>
    </>
}
