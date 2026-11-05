import { useState } from "react";
import { Send, Plus, Menu, Sparkles, Bot } from "lucide-react";

export default function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage() {
    if (!message.trim()) return;

    setMessages((old) => [
      ...old,
      { role: "user", text: message }
    ]);

    setMessage("");
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>NEXUS AI</h2>
        <button onClick={() => setMessages([])}>
          <Plus size={18} /> Nouvelle discussion
        </button>
        <p className="sidebar-label">Assistant intelligent</p>
      </aside>

      <main className="main">
        <header>
          <button className="menu"><Menu /></button>
          <div>
            <h3>NEXUS AI</h3>
            <span>Votre intelligence artificielle</span>
          </div>
          <Sparkles />
        </header>

        <section className="chat">
          {messages.length === 0 ? (
            <div className="welcome">
              <Bot size={55} />
              <h1>Bienvenue sur NEXUS AI</h1>
              <p>Comment puis-je vous aider aujourd'hui ?</p>
            </div>
          ) : (
            messages.map((item, index) => (
              <div className={`message ${item.role}`} key={index}>
                {item.text}
              </div>
            ))
          )}
        </section>

        <div className="input-area">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Écrivez votre message..."
          />
          <button onClick={sendMessage}>
            <Send size={20} />
          </button>
        </div>
        <p className="notice">NEXUS AI peut faire des erreurs.</p>
      </main>
    </div>
  );
}
