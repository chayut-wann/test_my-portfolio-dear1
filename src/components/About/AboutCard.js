import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import 'react-bootstrap';
// import { ComponentName } from 'react-bootstrap';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chayut Wannananon </span>
            from <span className="purple"> Nakhon Ratchasima.</span>
            <br /> I am a 4th year student studying at Bangkok University.
                    Faculty of Information Technology and Innovation.
                    Department of Computer Science.
            <br />
             I am enthusiastic about Machine Learning.
             (เดี๋ยวมาใส่ข้อความเพิ่มอีกนะครับ ตอนนี้โปรแกรมกำลังพัฒนา)
            <br />
            <br />
            เวลาว่างฉันจะทำ
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch a Move
            </li>
            <li className="about-activity">
              <ImPointRight /> travel
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
