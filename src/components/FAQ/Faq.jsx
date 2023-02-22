import React from "react";
import Accordion from "../Accordion/Accordion";
import "./Faq.css";

const accodionData = [
  {
    label: "What is Bookmark?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    label: "How can I request a new browser?",
    content:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies",
  },
  {
    label: " Is there a mobile app?",
    content:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    label: "What about other Chromium browsers?",
    content:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq__text">
        <h3>Frequently Asked Question</h3>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <div className="faq__accordion">
        {accodionData.map((accordion, index) => (
          <Accordion
            key={index}
            label={accordion.label}
            content={accordion.content}
          />
        ))}
      </div>
      <button>More info</button>
    </div>
  );
};

export default Faq;
