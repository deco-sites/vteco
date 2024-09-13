interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  /**
   * @description The main title of the benefits section.
   */
  title: string;
  /**
   * @description The subtitle of the benefits section.
   */
  subtitle: string;
  /**
   * @description List of benefit items to display.
   */
  benefits: BenefitItem[];
}

const Benefits = ({ title, subtitle, benefits }: BenefitsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-xl text-center mb-12">{subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">{benefit.title}</h3>
              <p className="text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;