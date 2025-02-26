import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./components/HomePage.jsx";
import EventOne from "./components/EventOne.jsx";
import EventTwo from "./components/EventTwo.jsx";
// import EventThree from "./components/EventThree.jsx";
import EventFour from "./components/EventFour.jsx";
import EventThreeNew from "./components/EventThreeNew.jsx"
// import Sample from "./components/Sample.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eventone" element={< EventOne />} />
        <Route path="/eventtwo" element={<EventTwo />} />
        <Route path="/eventthree" element={<EventThreeNew />} />
        <Route path="/eventfour" element={<EventFour />} />
      </Routes>
    </Router>

  </React.StrictMode>
);
