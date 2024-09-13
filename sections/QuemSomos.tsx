interface InfoSectionProps {
  /**
   * @description The title of the info section.
   */
  title: string;
  /**
   * @description The main text content of the info section.
   */
  content: string;
}

const InfoSection = ({ title, content }: InfoSectionProps) => {
  return (
    <section className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="w-24 h-1 bg-pink-500 mb-8"></div>
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-lg">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;