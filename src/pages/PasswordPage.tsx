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

    if (!sendName && password !== "letmein") {
      setError("Incorrect password");
      return;
    }

    if (sendName && name) {
      try {
        await fetch("/api/send-name", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        navigate("/thanks");
        return;
      } catch (err) {
        console.error(err);
        setError("Failed to send name");
        return;
      }
    }

    navigate("/llm-page");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-900 via-emerald-800 via-amber-900 to-green-900 bg-[length:300%_300%] animate-gradient-x">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-xl bg-black/30 p-8 rounded-2xl shadow-2xl flex flex-col gap-4 w-80 border border-white/20"
      >
        <h1 className="text-2xl font-semibold text-white text-center">
          practicing secrecy🥹
        </h1>

        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-300"
          disabled={sendName}
        />

        <input
          type="text"
          placeholder="name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-300"
        />

        <label className="flex items-center gap-2 text-white text-sm">
          <input
            type="checkbox"
            checked={sendName}
            onChange={(e) => setSendName(e.target.checked)}
            className="accent-green-400"
          />
          send my name to desola
        </label>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-md"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default PasswordPage;
