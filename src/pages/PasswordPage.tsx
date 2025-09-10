import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [sendName, setSendName] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Password is only required if checkbox NOT checked
    if (!sendName && password !== "letmein") {
      setError("Incorrect password");
      return;
    }

    if (sendName && name) {
      try {
        await fetch("http://localhost:5001/api/send-name", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        // redirect to thank you page
        navigate("/thanks");
        return; // stop execution
      } catch (err) {
        console.error(err);
        setError("Failed to send name");
        return;
      }
    }

    // Redirect to LLM page if not sending name
    navigate("/llm-page");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="bg-black/70 p-8 rounded-md flex flex-col items-center gap-4"
      >
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded"
          disabled={sendName} // optional: disable if sending name
        />

        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={sendName}
            onChange={(e) => setSendName(e.target.checked)}
          />
          Send my name to Desola
        </label>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-brown-cream text-black px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordPage;
