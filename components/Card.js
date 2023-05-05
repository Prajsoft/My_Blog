export default function Card({ image, title, description }) {
  return (
    <>
      <div className="styles.card">
        <img src={image} alt={title} className="styles.cimage" />
        <h2 className="styles.ctitle"> {title} </h2>
        <p className="styles.cdescription"> {description}</p>
      </div>
    </>
  );
}
