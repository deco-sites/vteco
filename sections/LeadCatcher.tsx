import { useState } from 'preact/hooks';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  subtitle?: string;
  buttonText?: string;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
}

const firebaseConfig = {
  // Your Firebase configuration here
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Newsletter({
  title = "Subscribe to Our Newsletter",
  subtitle = "Stay updated with our latest news and offers",
  buttonText = "Subscribe",
  backgroundColor = "#f3f4f6",
  textColor = "#1f2937",
}: Props) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const newsletterRef = ref(database, 'newsletter');
    push(newsletterRef, { email: email });
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div class="py-12 px-4" style={{ backgroundColor, color: textColor }}>
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">{title}</h2>
        <p class="mb-8">{subtitle}</p>
        <form onSubmit={handleSubmit} class="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            placeholder="Enter your email"
            required
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
          />
          <button
            type="submit"
            class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}