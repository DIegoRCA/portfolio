import React from "react";
import {Card} from "react-bootstrap";
import LuggageIcon from '@mui/icons-material/Luggage';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, <br /> <br />I am <span className="purple">Diego </span>
            from <span className="purple"> Sydney, </span>
            in my university days, I started coding (HTML, CSS & JS) at the same time as designing and printing, life and work led me to specialize in graphic design and printing. 
<br />In that space I have achieved a high level of expertise, with practices and standards for customer, suppliers and staff management. During the last  2 years of  the pandemic, my passion for coding was awakened again, and I realized I would like to return to my initial path  so I began to prepare myself for a change.
<br />Both, I prepared myself mentally and academically, through a lot of hours and nights of practice. 
I am ready now to take my next opportunity to bring my experience and learn, adding value to projects and growing as a professional developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <LuggageIcon /> Travelling
            </li>
            <li className="about-activity">
              <SportsSoccerIcon /> Playing soccer
            </li>
            <li className="about-activity">
              <ScreenSearchDesktopIcon /> Researching about latest tech
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#ff7e05" }}>
            "
Never stop learning, striving and improving yourself, grow and surprise yourself every minute of your life!"{" "}
          </p>
          <br />
          <footer className="blockquote-footer">Diego </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;