import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"                                // 8. Router 페이지 구성
import Detail from "../pages/Detail";
import Home from "../pages/Home";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;

