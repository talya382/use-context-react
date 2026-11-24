import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

export default function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <h1 style={{ color: theme === "dark" ? "white" : "black",}}>Card 1</h1>
        <p style={{ color: theme === "dark" ? "white" : "black",}}>This is my first card</p>
      </div>
      <div
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <h1 style={{ color: theme === "dark" ? "white" : "black",}}>Card 2</h1>
        <p style={{ color: theme === "dark" ? "white" : "black",}}> This is my second card</p>
      </div>
    </div>
  );
}
