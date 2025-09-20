import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [sendEmail, setSendEmail] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const correctPassword = "letmein"; 
  const formData = new URLSearchParams();
  formData.append("name", name);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== correctPassword) {
      setError("Incorrect password!");
      return;
    }

    setError("");

    if (sendEmail && name) {
        try {
            await fetch("http://localhost:5001/api/send-name", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
            });
        } catch (err) {
            console.error(err);
        }
    }

    navigate("/llm"); //llm page
  };

  return (
    <div className="min-h-screen bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center">
      <header className="absolute top-6 left-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="text-brown-cream hover:text-white hover:bg-brown-medium/20"
        >
          home
        </Button>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-black/70 p-10 rounded-lg flex flex-col items-center gap-6 shadow-lg"
      >
        <h1 className="text-3xl font-bold text-brown-cream mb-4">
          Welcome to Desola's Backroom
        </h1>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 rounded-md text-black"
        />

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-md text-black"
          />
          <label className="flex items-center gap-1 text-brown-cream">
            <input
              type="checkbox"
              checked={sendEmail}
              onChange={(e) => setSendEmail(e.target.checked)}
              className="accent-brown-medium"
            />
            Send to me
          </label>
        </div>

        <Button type="submit" className="bg-brown-medium hover:bg-brown-dark">
          Enter
        </Button>
      </form>
    </div>
  );
};

export default PasswordPage;
