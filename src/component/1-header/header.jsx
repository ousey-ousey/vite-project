import "./header.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [showmodel, setshowmodel] = useState(false);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <header className="flex">
      <button
        className="menue icon-menu"
        onClick={() => {
          setshowmodel(true);
        }}
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articiles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
        </ul>
      </nav>

      <button
        className={theme === "dark" ? "icon-moon-o" : "icon-sun"}
        onClick={handleThemeChange}
      />
      {showmodel && (
        <div className="fixed ">
          <ul className="model ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowmodel(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="#maincont">Articiles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
