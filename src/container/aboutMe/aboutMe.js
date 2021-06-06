import React from "react";
import img from "../../assets/niclice.jpeg";
import { AboutMe } from "../../components";
import { DownloadCVButton } from "../../components/buttons";
import cv from "../../assets/cv/NICLICE CV.pdf";
import letter from "../../assets/cv/Chivambo Niclice_letter.pdf";

export default function AboutMeContainer() {
  return (
    <AboutMe>
      <AboutMe.Container>
        <AboutMe.Column>
          <AboutMe.Image src={img} />
        </AboutMe.Column>
        <AboutMe.Column>
          <AboutMe.Heading2>About Me</AboutMe.Heading2>
          <AboutMe.Heading4>
            Hello! My Name is Chivambo Niclice.
          </AboutMe.Heading4>
          <AboutMe.Text>
            I am doing Civil Engineering which is the course i desire the most
            because I am passionate about my work and Because I love what I do.
          </AboutMe.Text>
          <AboutMe.Text>
            I have a steady source of motivation that drives me to do my best.
          </AboutMe.Text>
        </AboutMe.Column>
      </AboutMe.Container>
      <AboutMe.Buttons>
        <DownloadCVButton href={cv} target="_blank">
          CV
        </DownloadCVButton>
        <DownloadCVButton href={letter} target="_blank">
          Cover Letter
        </DownloadCVButton>
      </AboutMe.Buttons>
    </AboutMe>
  );
}
