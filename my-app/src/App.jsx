import "./App.css";
import UserProfile from "./components/UserProfile";
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  const userName = "alice";
const [theme, setTheme] = useState("light");
  return (
    <>
      <UserContext.Provider value={userName}>
        <UserProfile />
      </UserContext.Provider>

      <ThemeContext.Provider value={{theme,setTheme}}>
        <Header/>
        <Content />
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
