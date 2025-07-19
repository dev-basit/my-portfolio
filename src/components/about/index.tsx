import React from "react";
import Image from "next/image";
import { AboutStyles } from "@/components/about/styles";
import { CommonStyles } from "@/styles/common";
import { config, fonts } from "@/config";

function About() {
  return (
    <AboutStyles.AboutContainer data-aos="zoom-in-up" id="about">
      <AboutStyles.AboutHeading>ABOUT ME</AboutStyles.AboutHeading>
      <AboutStyles.AbouContentContainer data-aos="fade-up">
        <AboutStyles.AboutLeftContainer>
          <Image
            src="/assets/basit-office.png"
            width={600}
            height={450}
            alt="about me"
            style={{ borderRadius: "1rem", objectFit: "cover", objectPosition: "top" }}
          />
        </AboutStyles.AboutLeftContainer>
        <AboutStyles.AboutRightContainer>
          <CommonStyles.Text fonts={fonts}>{config.aboutText}</CommonStyles.Text>
          <CommonStyles.HorizontalBreak />
          <CommonStyles.Text fonts={fonts}>{config.aboutText2}</CommonStyles.Text>
        </AboutStyles.AboutRightContainer>
      </AboutStyles.AbouContentContainer>
    </AboutStyles.AboutContainer>
  );
}

export default About;
