import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { User } from "../containers/User";
import { NotFound } from "../components/NotFound";

export const Main = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);




