import Link from "next/link"
import projects from "../json/projects.json"
import Image from "next/image"

export default function ProjectCard({ title, image, description, link: { label, href } }: typeof projects[number]) {
  return (
    <div className="project-card container">
      <Image src={image} width={360} height={360} draggable="false" alt={`Foto do projeto ${title}`} />
      <div className="description-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="social-buttons">
        <Link href={href} target="_blank" className="button" draggable="false">{label}</Link>
      </div>
    </div>
  )
}