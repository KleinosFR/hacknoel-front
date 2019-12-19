import React from "react";
import { Footer, Icon } from 'react-materialize';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footers() {
    return (
<>
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
</>
    )
}

export default Footers
