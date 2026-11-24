import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <footer
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <p>@talyaacc055</p>
        <p>Theme:{theme}</p>
      </footer>
    </div>
  );
}
