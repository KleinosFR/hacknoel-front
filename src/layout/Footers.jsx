import React from "react";
import { Footer, Icon } from 'react-materialize';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

let phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

let style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
}

function Footers() {
    return (
<>
<div style={phantom} />
<div style={style}>
<Footer
  className="example"
>
  <h5 className="white-text">
    ici on signe en chaussettes
  </h5>
  <p className="grey-text text-lighten-4">
    Made with ❤ by WCS #1 students
  </p>
  <Icon left>
    <a style={{color:"white"}} href="https://www.facebook.com/WildCodeSchool/"><FontAwesomeIcon icon={faFacebook} /></a>
  </Icon>
  <Icon left>
  <a style={{color:"white"}} href="https://www.instagram.com/wildcodeschool/"><FontAwesomeIcon icon={faInstagram} /></a>
  </Icon>
  <Icon left>
  <a style={{color:"white"}} href="https://twitter.com/wildcodeschool"><FontAwesomeIcon icon={faTwitter} /></a>
  </Icon>
  <Icon left>
  <a style={{color:"white"}} href="https://www.linkedin.com/school/wild-codes-chool/"><FontAwesomeIcon icon={faLinkedin} /></a>
  </Icon>
  <Icon left>
  <a style={{color:"white"}} href="https://www.youtube.com/channel/UCi99G_0QPx5sYsK8zdvQzfw"><FontAwesomeIcon icon={faYoutube} /></a>
  </Icon>
  <Icon left>
  <a style={{color:"white"}} href="https://github.com/WildCodeSchool"><FontAwesomeIcon icon={faGithub} /></a>
  </Icon>

</Footer>
</div>
</>
    )
}

export default Footers
