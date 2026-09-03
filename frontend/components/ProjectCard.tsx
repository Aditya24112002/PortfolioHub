import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];

  githubUrl: string;
  image: string;
};
  
  export default function ProjectCard({
    title,
    description,
    technologies,
    githubUrl,
    image,
  }: ProjectCardProps) {
    return (
      <div className="theme-surface rounded-2xl p-6">
  
        <h3 className="theme-accent mb-4 text-2xl font-bold">
          {title}
        </h3>
  
        <p className="theme-text">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          
          {technologies.map((tech) => (
            <span
            key={tech}
            className="rounded-full bg-[var(--button-bg)] px-3 py-1 text-sm theme-accent">
              {tech}
            </span>
          ))}
        </div>

        <Image src={image} alt={title} width={600} height={300} className="mb-4 h-48 w-full rounded-xl object-cover"/>

        <a className="theme-accent mt-4 inline-block"
        href={githubUrl}
        target="_blank"
        rel="noreferrer">
          View Source →
        </a>


      </div>
    );
  }