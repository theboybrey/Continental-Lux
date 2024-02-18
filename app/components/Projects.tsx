import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectImg1 from '../../public/assets/Img-2.png'
import ProjectImg2 from '../../public/assets/Img-3.png'
import ProjectImg3 from '../../public/assets/Img-4.png'

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="md:flex md:flex-col justify-center items-center md:mt-6">
      {/* Title Caption */}
      <h1 className="text-5xl font-medium py-3 md:mb-2">
        Our Recent Projects
      </h1>

        {/* Project Listing */}
      <div className="md:mb-8 md:grid md:grid-cols-3 justify-center mx-auto gap-2">
        <ProjectCard src={ProjectImg1} title="Sobaha Villa" reviews={4.5} msg="A luxirious 3D apartment construction to be built in the province of Accra. The heart of Ghana."/>
        <ProjectCard src={ProjectImg2} title="Trance Aboda" reviews={4.2} msg="Souel's hartwarming 3D apartment yet to be situated in HongKong."/>
        <ProjectCard src={ProjectImg3} title="Guardian Home" reviews={4.1} msg="The Chinese-like 3D simulation of a native home. With historical instances, the design is one that depicts how the Chinese setting is in medieval times."/>
      </div>
    </div>
  );
};

export default Projects;
