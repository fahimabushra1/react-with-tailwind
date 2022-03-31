import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="text-center">
            <Navbar></Navbar>
            <h2 className="text-4xl mt-5 text-orange-700">save most of your money</h2>
            <p className="text-orange-500">By giving your money to me!!!!</p>
        </div>
    );
};
export default Header;