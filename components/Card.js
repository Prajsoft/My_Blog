import Image from "next/image";

export default function Card({ imageSrc, title, description }) {
  return (
    <>
      <div className="styles.card">
        <Image
          src={imageSrc}
          alt={title}
          className="styles.cimage"
          layout="fill"
        />
        <h2 className="styles.ctitle"> {title} </h2>
        <p className="styles.cdescription"> {description}</p>
      </div>
    </>
  );
}
