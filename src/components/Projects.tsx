import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../utils/projects";
import { useEffect, useRef, useState } from "react";

export function Projects() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center gap-10 mt-30"
    >
      <div className="flex flex-col gap-3 text-center">
        <div className="font-bold text-3xl text-white max-sm:text-2xl">
          Featured <span className="text-purple-500">Projects</span>
        </div>
        <div className="font-bold text-sm text-gray-300  text-center">
          Here are some of my recent projects, showcasing my work with modern
          web technologies and creative problem-solving.{" "}
        </div>
      </div>
      <div className="flex gap-10 items-center | max-sm:flex-col ">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card flex flex-col w-110 h-110 max-sm:w-60 max-sm:h-60 items-center text-white gap-3 rounded-2xl bg-gray-700/30 hover:scale-105 transition-all duration-200 ease-out shadow-sm hover:bg-gray-700/50 ${visible ? "project-card-bounce" : ""}`}
            style={visible ? { animationDelay: `${index * 0.12}s` } : undefined}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="rounded-t-2xl overflow-hidden h-1/2 max-sm:hidden"
            />
            <div className="flex justify-around w-full pt-2">
              {project.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-gray-500/40 rounded-2xl px-2 | max-sm:hidden"
                >
                  {tool}
                </div>
              ))}
            </div>
            <div className="text-xl font-semibold pt-3">{project.title}</div>
            <div className="w-full text-center text-gray-300 px-5 | max-sm:text-sm">
              {project.description}
            </div>
            <div className="h-2"></div>
            <div className="flex gap-5 self-start text-gray-400 px-5 py-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white duration-500"
              >
                <ExternalLink />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Github />
              </a>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/estifz"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-2 bg-yellow-500/ rounded-full py-2 px-3 "
      >
        <div className="text-white font-bold">
          Check my <span className="text-purple-500">Github</span>
        </div>
        <div className="text-purple-500 w-5 h-5 group-hover:translate-x-2 duration-300">
          <ArrowRight />
        </div>
      </a>
    </div>
  );
}
