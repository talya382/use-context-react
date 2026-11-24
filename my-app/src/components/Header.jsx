import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  function hendelClick() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  return (
    <>
      <h1>My Theme App</h1>
      <button onClick={hendelClick}>
        {theme === "dark"
          ? "Switch to Light"
          : "Switch to Dark"}
      </button>
    </>
  );
}
