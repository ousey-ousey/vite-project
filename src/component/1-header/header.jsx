import "./header.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [showmodel, setshowmodel] = useState(false);

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "dark";
  });

  useEffect(() => {
    document.body.classList.remove(
      "summer",
      "autumn",
      "winter",
      "spring",
      "light",
      "dark"
    );
    document.body.classList.add(theme);
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);

    // Toggle the icon class
    const themeButton = document.querySelector(".theme-toggle");
    themeButton.classList.toggle("icon-moon-o");
    themeButton.classList.toggle("icon-sun");
  };

  const handleSeasonChange = (newSeason) => {
    localStorage.setItem("season", newSeason);
    setTheme(newSeason);
  };

  return (
    <header className="flex">
      {/* <button className="menu icon-menu" onClick={() => setshowmodel(true)} /> */}
      <button
        className={`theme-toggle ${
          theme === "dark" ? "icon-moon-o" : "icon-sun"
        }`}
        onClick={handleThemeChange}
      />

      <div className="seasons-container">
        <img
          className={`season-img ${theme === "summer" ? "active" : ""}`}
          src="/summer.png"
          alt="summer"
          onClick={() => handleSeasonChange("summer")}
        />
        <img
          className={`season-img ${theme === "autumn" ? "active" : ""}`}
          src="/autumn.png"
          alt="autumn"
          onClick={() => handleSeasonChange("autumn")}
        />
        <img
          className={`season-img ${theme === "winter" ? "active" : ""}`}
          src="/snowman.png"
          alt="winter"
          onClick={() => handleSeasonChange("winter")}
        />
        <img
          className={`season-img ${theme === "spring" ? "active" : ""}`}
          src="/spring.png"
          alt="spring"
          onClick={() => handleSeasonChange("spring")}
        />
      </div>

      {showmodel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => setshowmodel(false)}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
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
