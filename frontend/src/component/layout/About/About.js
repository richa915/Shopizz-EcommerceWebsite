import React from "react";
import "./About.css";
import { Typography } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
           
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse. Ultrices in iaculis nunc sed augue lacus viverra. Odio facilisis mauris sit amet. Risus nullam eget felis eget. 
            Eget arcu dictum varius duis at consectetur. Libero nunc consequat interdum varius sit amet mattis. Non pulvinar neque laoreet suspendisse interdum. Velit aliquet sagittis id consectetur purus ut faucibus. Fringilla est ullamcorper eget nulla facilisi. Erat imperdiet sed euismod nisi porta lorem.
            Tellus id interdum velit laoreet id donec. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Vulputate ut pharetra sit amet aliquam. Viverra aliquet eget sit amet tellus cras adipiscing enim. Consectetur libero id faucibus 
            nisl tincidunt eget nullam non nisi. Fusce ut placerat orci nulla. Facilisi nullam vehicula ipsum a arcu cursus.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Us On</Typography>
            <a
              href="/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;