import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
<<<<<<< HEAD
    <div>
      <Helmet>
        <title>About Us - React Helmet POC</title>
        <meta name="description" content="Learn more about our React Helmet PoC" />
      </Helmet>
      <h1>About Us</h1>
    </div>
=======
    <>
      <Helmet>
        <title>About - React Helmet POC</title>
        <meta name="description" content="This is the about page of our React Helmet project." />
        <meta property="og:title" content="React Helmet POC - About Us" />
        <meta property="og:description" content="Know more about React Helmet and its benefits." />
        <meta property="og:image" content="https://yourwebsite.com/about-preview.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <link rel="canonical" href="https://yourwebsite.com/about" />
        <meta name="theme-color" content="#3366cc" />
      </Helmet>
      <h1>About Page</h1>
      <p>Learn more about this POC.</p>
    </>
>>>>>>> 520d2ca01b98fa4a65af923c2df0aa53f9532713
  );
};

export default About;
