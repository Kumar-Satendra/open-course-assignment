import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - React Helmet POC</title>
        <meta name="description" content="Learn more about our React Helmet PoC" />
      </Helmet>
      <h1>About Us</h1>
    </div>
  );
};

export default About;
