import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        <a
          className="footer-link"
          href="https://github.com/askat58/react-app-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source on GitHub
        </a>{" "}
        coded by <a
          className="footer-author"
          href="https://www.linkedin.com/in/joanna-el%C5%BCbieta-t-288561181/" target="_blank"
          rel="noopener noreferrer"
        >
          Joanna Tucka
        </a>
      </small>
    </div>
  );
}
