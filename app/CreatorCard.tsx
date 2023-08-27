import Link from "next/link"
import Image from "next/image"
import { creatorCard } from "@/json/types"

export default function CreatorCard({ name, link, image, description, pronouns }: creatorCard) {
  return (
    <div className="creator-card container">
      <div className="heading">
        <p>{name}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer" draggable="false">{link}</Link>
      </div>
      <Image src={image} width={360} height={360} draggable="false" alt={`Imagem do(a) ${name}`} />
      <div className="description-container">
        <p>{description}</p>
      </div>
      <div className="social-buttons">
        {pronouns.map((pronoun, i) => <p key={i}>{pronoun}</p>)}
      </div>
    </div>
  )
}