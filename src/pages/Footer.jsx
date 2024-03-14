import React from "react";
import playStore from "../assets/playstore.png";
import appStore from "../assets/Appstore.png";
import styled from "styled-components";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <Container>
      <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Android and IOS mobile phone</p>
          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="Appstore" />
        </div>

        <div className="midFooter">
          <img src={logo} alt="NETFLIX"/>
          <p>High Quality is our first priority</p>

          <p>Copyrights 2021 &copy; AnshirChaudhary</p>
        </div>

        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="http://instagram.com">Instagram</a>
          <a href="http://youtube.com">Youtube</a>
          <a href="http://instagram.com">Facebook</a>
        </div>
      </footer>
    </Container>
  );
};

const Container = styled.div`
footer {
  margin-top: 10vmax;
  padding: 2vmax;
  background-color: rgb(34, 33, 33);
  color: white;
  display: flex;
  align-items: center;
}

.leftFooter {
  width: 20%;
  display: flex;

  flex-direction: column;
  align-items: center;
}
.leftFooter > h4 {
  font-family: "Roboto";
  font-size: 1vmax;
}
.leftFooter > p {
  text-align: center;
  font-size: 1.2vmax;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.leftFooter > img {
  width: 10vmax;
  margin: 1vmax;
  cursor: pointer;
}

.midFooter {
  width: 60%;
  text-align: center;
}

.midFooter > img {
  height:3.5rem;
}
.midFooter > p {
  max-width: 60%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 1vmax auto;
}

.rightFooter {
  width: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.rightFooter > h4 {
  font-family: "Roboto";
  font-size: 1.4vmax;
  text-decoration: underline;
}
.rightFooter > a {
  text-decoration: none;
  font-size: 1.3vmax;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: white;
  transition: all 0.5s;
  margin: 0.5vmax;
}

.rightFooter > a:hover {
  color: #eb4034;
}
`;