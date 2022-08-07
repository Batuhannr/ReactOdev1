import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import {render, screen} from "@testing-library/react"
import SearchInput from "../SearchInput";
import EmojiResults from "../EmojiResults";
import filterEmoji from "../filterEmoji";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import 'web-vitals'
import Header from "../Header"


describe(`Emoji Testing`,() =>{
let input

test("Başlık Kontrol", () => {
    render(<Header />);
    const headerText = screen.getByText(/Emoji Search/i);
    expect(headerText).toBeInTheDocument();
  });

  test("Aramadan Sonra Emoji Yükleniyormu", () => {
    render(<App />);
    const inputText = screen.getByText("1234");
    expect(inputText).toBeInTheDocument("1234");
  });

  test("Render'den Sonra Emoji Yükleniyormu", () => {
    render(<App />);
    const items = screen.getAllByTestId("row");
    expect(items.length).toEqual(20);
  });

  test("Kopyalama Çalışıyormu", () => {
    render(<App />);
    const clicks = screen.getAllByTestId("row");
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
  });

})