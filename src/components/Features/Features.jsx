import React from "react";
import "./Features.css";
import Tabs from "../Tabs/Tabs";
import images from "../../images";

const Features = () => {
  return (
    <div className="features">
      <div className="feature__info">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="left__bg-design"></div>
      <div className="feature__cards">
        <Tabs
          tabs={[
            {
              name: "Simple Bookmark",
              img: images.illustrationFeatures1,
              heading: "Bookmark with one click",
              para: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
              btn: "More Info",
            },

            {
              name: "Simple Bookmark2",
              img: images.illustrationFeatures2,
              heading: "2Bookmark with one click",
              para: "2Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
              btn: "More Info2",
            },

            {
              name: "Simple Bookmark3",
              img: images.illustrationFeatures3,
              heading: "3Bookmark with one click",
              para: "3Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
              btn: "More Info3",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Features;
