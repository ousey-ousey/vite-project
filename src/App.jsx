import Hero from "./component/2-hero/hero";
import Header from "./component/1-header/header";
import Main from "./component/3-main/main";
import Contant from "./component/4-conn/conn";
import Footer from "./component/5-footer/footer";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let BTN = document.getElementById("btna");
      if (window.scrollY > 400) {
        BTN.style.opacity = "1";
      } else {
        BTN.style.opacity = "0";
      }
    });
  });

  return (
    <div className="container" id="up">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contant />
      <div className="divider" />
      <Footer />
      <a id="btna" style={{ opacity: 0 }} href="#up">
        <button className="scroll2top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
