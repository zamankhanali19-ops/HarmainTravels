import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { useAudit } from '../../hooks/useAudit';

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi there! I am your AI SEO Assistant. How can I help you optimize your website today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { results } = useAudit();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-seo-ai', handleOpen);
    return () => window.removeEventListener('open-seo-ai', handleOpen);
  }, []);

  const generateResponse = (userText) => {
    const lowerText = userText.toLowerCase();
    
    // Simple rule-based mock responses based on audit results
    if (results) {
      if (lowerText.includes('score') || lowerText.includes('overall')) {
        return `Based on my analysis, your overall SEO score is ${results.scores.overall}/100. Your technical health is ${results.scores.health}/100, and performance is ${results.scores.performance}/100.`;
      }
      if (lowerText.includes('critical') || lowerText.includes('issue')) {
        if (results.issues.critical.length > 0) {
          return `I found ${results.issues.critical.length} critical issues. The most pressing is: "${results.issues.critical[0].message}". You should fix this immediately.`;
        } else {
          return "Great news! I didn't find any critical issues on your analyzed page.";
        }
      }
      if (lowerText.includes('improve') || lowerText.includes('fix')) {
         if (results.issues.warnings.length > 0) {
             return `To improve your score, I recommend starting with this warning: ${results.issues.warnings[0].fix}`;
         }
      }
    }

    if (lowerText.includes('hello') || lowerText.includes('hi')) {
      return "Hello! Let me know if you want me to explain any SEO concepts or analyze your recent audit results.";
    }
    
    if (lowerText.includes('meta')) {
      return "Meta tags (like title and description) help search engines understand what your page is about. They are critical for click-through rates from search results.";
    }

    // Default response
    return "I'm currently running in Phase 1 demo mode. In the future, I will connect to OpenAI/Claude to provide deep, contextual SEO advice based on your full website crawls. For now, try asking me about your 'score' or 'critical issues' if you've run an audit!";
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate network delay
    setTimeout(() => {
      const response = generateResponse(userMessage.text);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 z-40 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 hover:scale-110'
        }`}
        style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white' }}
      >
        <Bot size={24} />
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[400px] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out z-50`}
        style={{
          background: 'var(--bg-elevated)',
          borderLeft: '1px solid var(--border-primary)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--border-primary)' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>AI SEO Assistant</h3>
              <p className="text-[10px] font-medium" style={{ color: 'var(--text-tertiary)' }}>Powered by SEOPulse Engine</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col max-w-[85%] ${msg.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'}`}
            >
              <div
                className="px-4 py-2.5 rounded-2xl text-sm"
                style={{
                  background: msg.role === 'user' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'var(--bg-tertiary)',
                  color: msg.role === 'user' ? 'white' : 'var(--text-primary)',
                  borderBottomRightRadius: msg.role === 'user' ? '4px' : '16px',
                  borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '16px',
                }}
              >
                {msg.text}
              </div>
              <span className="text-[10px] mt-1 px-1" style={{ color: 'var(--text-tertiary)' }}>
                {msg.role === 'user' ? 'You' : 'AI Assistant'}
              </span>
            </div>
          ))}
          {isTyping && (
            <div className="mr-auto px-4 py-3 rounded-2xl" style={{ background: 'var(--bg-tertiary)' }}>
              <Loader2 size={16} className="animate-spin" style={{ color: 'var(--brand-500)' }} />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t" style={{ borderColor: 'var(--border-primary)' }}>
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your SEO..."
              className="flex-1 input rounded-full px-4 text-sm"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors"
              style={{
                background: input.trim() && !isTyping ? 'var(--brand-500)' : 'var(--bg-tertiary)',
                color: input.trim() && !isTyping ? 'white' : 'var(--text-tertiary)'
              }}
            >
              <Send size={16} className={input.trim() && !isTyping ? 'ml-0.5' : ''} />
            </button>
          </form>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AiAssistant;
