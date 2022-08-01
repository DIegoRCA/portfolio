import React from "react";
import Card from "react-bootstrap/Card";
import MovieIcon from "@mui/icons-material/Movie";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Diego </span>
            from <span className="purple"> Sydney, Australia</span>
            <br />I am a passionate Full stack developer whith a range of Front-end &amp; Back-end skills like HTML, CSS, Javascript, React, Express, Node.js.
            Whith years of design background been an expert in the Adobe Suite.
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