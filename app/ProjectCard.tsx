import Link from "next/link"
import projects from "../json/projects.json"
import Image from "next/image"

export default function ProjectCard({ name, image, description, link: { label, href } }: typeof projects[number]) {
  return (
    <div className="project-card container">
      <Image src={image} width={360} height={360} draggable="false" alt={`Foto do projeto ${name}`} />
      <div className="description-container">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="social-buttons">
        <Link href={href} target="_blank" className="button" draggable="false">{label}</Link>
      </div>
    </div>
  )
}