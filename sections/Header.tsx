interface HeaderProps {
  /**
    * @description The description of name.
  */
  title: string;
  subtitle?: string;
  buttonText: string;
  links: {
    text: string;
    href: string;
  }[];
}

const Header = ({ title, subtitle, buttonText, links }: HeaderProps) => {
  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <nav>
            <ul className="flex space-x-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-300">{link.text}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"> {buttonText} </button>
        </div>
      </div>
      
    </header>
  );
};

export default Header;