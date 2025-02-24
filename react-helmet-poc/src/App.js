import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <Router>
      <Helmet>
        <title>React Helmet POC</title>
        <meta name="description" content="A Proof of Concept for managing SEO in React using Helmet." />
        <meta property="og:title" content="React Helmet POC" />
        <meta property="og:description" content="Learn how to implement React Helmet for SEO." />
        <meta property="og:image" content="https://yourwebsite.com/default-preview.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
      </Helmet>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
