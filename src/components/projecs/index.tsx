import React from "react";
import Image from "next/image";
import { ProjectsStyles } from "@/components/projecs/styles";
import { CommonStyles } from "@/styles/common";
import { config, projectCategoryfonts } from "@/config";
import Link from "next/link";

function Projects() {
  return (
    <ProjectsStyles.ProjectsContainer data-aos="zoom-in-up" id="projects">
      <ProjectsStyles.ProjectsHeadingContainer>
        <CommonStyles.ContainerHeading>PROJECTS</CommonStyles.ContainerHeading>
        <CommonStyles.ContainerHeadingSM>click to explore</CommonStyles.ContainerHeadingSM>
      </ProjectsStyles.ProjectsHeadingContainer>

      <ProjectsStyles.ProjectsContentContainer>
        {config.projects.map((item, index) => (
          <ProjectsStyles.Project key={index} data-aos="fade-left">
            <Link href={item.link} target="_black">
              <Image
                src={item.image}
                width={600}
                height={350}
                alt="about me"
                // objectFit="contain"
                style={{ borderRadius: "1rem", objectFit: "contain" }}
              />
              <CommonStyles.RowCenter>
                <CommonStyles.ContainerHeadingMD>{item.name}</CommonStyles.ContainerHeadingMD>
                <CommonStyles.Text fonts={projectCategoryfonts}>|</CommonStyles.Text>
                {/* <CommonStyles.Text fonts={projectCategoryfonts}>{item.category}</CommonStyles.Text> */}
                <CommonStyles.Text fonts={projectCategoryfonts} style={{ textDecoration: "underline" }}>
                  Link
                </CommonStyles.Text>
              </CommonStyles.RowCenter>
              <CommonStyles.RowCenter>
                {item.highlights.map((highlight, index) => (
                  <CommonStyles.Button key={index}>{highlight}</CommonStyles.Button>
                ))}
              </CommonStyles.RowCenter>
              <ProjectsStyles.ProjectDescription>{item.description}</ProjectsStyles.ProjectDescription>
            </Link>
          </ProjectsStyles.Project>
        ))}
      </ProjectsStyles.ProjectsContentContainer>
    </ProjectsStyles.ProjectsContainer>
  );
}

export default Projects;
