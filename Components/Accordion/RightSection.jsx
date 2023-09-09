import Image from "next/image";

function RightSection({ item, displayContent }) {
  return (
    <div
      className={`sectionContent ${
        displayContent === true ? "open" : "close"
      } right-section`}
    >
      <Image alt={item.title} width={377} src={item.image} />
      <div className="sectionTitle">
        <p className="accordion-title">{item.title}</p>
        <p className="accordion-par">{item.paragraph}</p>
      </div>
    </div>
  );
}

export default RightSection;
