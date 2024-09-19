import { useSignal } from 'preact/hooks';

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

export default function Newsletter({
  title = "Subscribe to Our Newsletter",
  subtitle = "Stay updated with our latest news and offers",
  buttonText = "Subscribe",
  backgroundColor = "#f3f4f6",
  textColor = "#1f2937",
}: Props) {
  const [email, setEmail] = useSignal("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      await fetch("/api/database/records/clientes", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      setEmail("");
      alert("Thank you for subscribing!");
    } catch (error) {
      console.error("Error saving email:", error);
      alert("An error occurred. Please try again.");
    }
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