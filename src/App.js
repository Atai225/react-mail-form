import React, {useEffect} from "react";
import ContactForm  from "./components/ContactFrom";
import "./App.css";

const App = () => {
  useEffect(() => {
    fetch('/api').then((res) => res.json()).then(data => console.log(data))
  }, [])
  return (
    <div className="container">
      <div className="left-column">
        <div className="content">
          <img src="/astronaut.png" alt="austronaut" />
        </div>
      </div>
      <div className="right-column">
        <ContactForm />
      </div>
    </div>
  );
};
export default App;
