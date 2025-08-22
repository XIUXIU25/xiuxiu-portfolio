import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Xiu Xiu </span>
            <span className="purple"> </span>
            <br />
            I am currently a second-year graduate student in computer science at Northeastern University.
            <br />
            I’m skilled in building scalable web applications, deploying to cloud platforms such as AWS and GCP, and implementing CI/CD automation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking and Trying New Cuisines
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I aim to design products that make daily experiences simpler and better."{" "}
          </p>
          <footer className="blockquote-footer">Xiu Xiu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
