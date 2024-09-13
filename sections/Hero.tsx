
import { ImageWidget } from "apps/admin/widgets.ts";
import _Image from "apps/website/components/Image.tsx";

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  backgroundImage?: ImageWidget;
}

const Hero = ({ title, subtitle, buttonText, backgroundImage }: HeroProps) => {
  
  return (
    <section
      className={`text-white py-20 bg-cover bg-initial bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          {subtitle && <p className="text-xl mb-8">{subtitle}</p>}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;