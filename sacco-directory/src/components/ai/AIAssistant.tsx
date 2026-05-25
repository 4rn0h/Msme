'use client';

import { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import styles from './AIAssistant.module.css';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Jambo! I am BomaBot. How can I help you find the right SACCO or MFI today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    // Simple mock response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: 'I am currently in MVP mode. In the full version, I can explain terms like "Reducing Balance" or find loans in specific counties!' }]);
    }, 600)
  };

  return (
    <div className={styles.container}>
      {isOpen ? (
        <div className={styles.window}>
          <div className={styles.header}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bot size={20} />
              <span style={{ fontWeight: 600 }}>BomaBot AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ color: 'white' }}>
              <X size={20} />
            </button>
          </div>
          
          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className={styles.inputArea}>
            <input 
              type="text" 
              placeholder="Ask anything..." 
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className={styles.sendBtn} onClick={handleSend}>
              <Send size={20} />
            </button>
          </div>
        </div>
      ) : (
        <button className={styles.fab} onClick={() => setIsOpen(true)}>
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
}
