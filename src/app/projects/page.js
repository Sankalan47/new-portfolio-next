"use client";
import AnimatedCard from "@/components/AnimatedCard/AnimatedCard";
import Project from "@/components/Project/Project";

const Projects = () => {
  const projects = [
    {
      name: "BookOnABudget",
      url: "https://explore.bookonabudget.com",
      img: "https://ik.imagekit.io/sankalan/portfolio/projects/Screenshot%20(97).png?updatedAt=1699642487178",
      desc: "End to end travel booking platoform for budget travelers. Built with Next.js, Firebase, and Tailwind CSS.",
      tags: ["Next", "Firebase", "Mongodb", "Node.js", "Express", "Razorpay", "Resend", "Tailwind"],
    },
    {
      name: "Devfest Siliguri 2023",
      url: "https://gdgsiliguri.com/",
      img: "https://ik.imagekit.io/sankalan/portfolio/projects/Screenshot%20(97).png?updatedAt=1699642487178",
      desc: "The official Website of Devfest Siliguri, Made with Angular Universal & Firebase",
      tags: ["Angular Universal", "Firebase", "Tailwind"],
    },
    {
      name: "Sketchbook",
      url: "https://sketchbook-eta-coral.vercel.app/",
      img: "https://ik.imagekit.io/sankalan/portfolio/projects/sketchbook.png?updatedAt=1699639896102",
      desc: "Online drawing tool made with next, socket.io and tailwind",
      tags: ["Next", "Socket.io", "Tailwind"],
    },
  ];
  return (
    <main>
      <AnimatedCard>
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            img={project.img}
            url={project.url}
            desc={project.desc}
            tags={project.tags}
          />
        ))}
      </AnimatedCard>
    </main>
  );
};

export default Projects;
