import React from "react";
import {Card} from "react-bootstrap";
import MovieIcon from "@mui/icons-material/Movie";
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
            in my university days, I started coding (HTML, CSS &amp; JS) at the same time as designing and printing, life and work led me to specialize in design and printing, in which I have achieved a level of expertise, with good manners for customer management, suppliers and staff. With the past periods of change and adaptation during the pandemic, my passion for coding was awakened, and I began to prepare for the career change both mentally and through studies and a lot of hours and nights of practice. I am looking for the opportunity to demonstrate my knowledge by adding value to the project and growing as a professional developer.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MovieIcon /> Watching Movies
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