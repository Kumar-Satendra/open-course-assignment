import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - React Helmet POC</title>
        <meta name="description" content="This is the home page of our React Helmet project." />
        <meta property="og:title" content="React Helmet POC - Home" />
        <meta property="og:description" content="Learn how to manage SEO in React using Helmet." />
        <meta property="og:image" content="https://yourwebsite.com/home-preview.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/home" />
        <link rel="canonical" href="https://yourwebsite.com/home" />
        <meta name="theme-color" content="#ff6600" />
      </Helmet>
      <h1>Home Page</h1>
      <p>Welcome to the React Helmet Proof of Concept!</p>
    </>
  );
};

export default Home;
