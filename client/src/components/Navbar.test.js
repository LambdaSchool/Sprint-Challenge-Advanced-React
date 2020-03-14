import React from "react";
// import { render } from "react-testing-library";
import { render, fireEvent , queryByAttribute} from "@testing-library/react";
import App from "../App";
import Navbar from "./Navbar";

//const getById = queryByAttribute.bind(null, 'id');


test("render with dark mode default", ()=> {
    //go back and check it out
    const {getByTestId } = render(<Navbar />);

    const darkmodeBtn = getByTestId("dark-mode");
    fireEvent.click(darkmodeBtn);

    const body = document.querySelector("body");
    expect([...body.classList].includes("dark-mode")).toBe(true);
    // fireEvent.click(darkmodeBtn)
    //  expect(getByTestId(body)).toHaveStyle('background-color: black')
    //                                      ^
    //    fireEvent.click(darkmodeBtn)
    //   expect(getByTestId(body)).toHaveStyle('background-color: white')
})