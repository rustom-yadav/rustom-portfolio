const categoryAccent = {
  'programming-languages': {
    border: 'border-[#fbbf24]/20 dark:border-[#fbbf24]/20',
    bg: 'hover:bg-[#fbbf24]/5 dark:hover:bg-[#fbbf24]/5',
    glow: 'hover:shadow-[0_8px_30px_rgba(251,191,36,0.08)] dark:hover:shadow-[0_8px_30px_rgba(251,191,36,0.1)]',
    tag: 'text-[#d97706] dark:text-[#fbbf24]',
    iconBg: 'bg-[#fbbf24]/10 dark:bg-[#fbbf24]/10',
  },
  frontend: {
    border: 'border-[#22d3ee]/20 dark:border-[#22d3ee]/20',
    bg: 'hover:bg-[#22d3ee]/5 dark:hover:bg-[#22d3ee]/5',
    glow: 'hover:shadow-[0_8px_30px_rgba(34,211,238,0.08)] dark:hover:shadow-[0_8px_30px_rgba(34,211,238,0.1)]',
    tag: 'text-[#0891b2] dark:text-[#22d3ee]',
    iconBg: 'bg-[#22d3ee]/10 dark:bg-[#22d3ee]/10',
  },
  backend: {
    border: 'border-[#34d399]/20 dark:border-[#34d399]/20',
    bg: 'hover:bg-[#34d399]/5 dark:hover:bg-[#34d399]/5',
    glow: 'hover:shadow-[0_8px_30px_rgba(52,211,153,0.08)] dark:hover:shadow-[0_8px_30px_rgba(52,211,153,0.1)]',
    tag: 'text-[#059669] dark:text-[#34d399]',
    iconBg: 'bg-[#34d399]/10 dark:bg-[#34d399]/10',
  },
  'databases-services': {
    border: 'border-[#e879f9]/20 dark:border-[#e879f9]/20',
    bg: 'hover:bg-[#e879f9]/5 dark:hover:bg-[#e879f9]/5',
    glow: 'hover:shadow-[0_8px_30px_rgba(232,121,249,0.08)] dark:hover:shadow-[0_8px_30px_rgba(232,121,249,0.1)]',
    tag: 'text-[#a21caf] dark:text-[#e879f9]',
    iconBg: 'bg-[#e879f9]/10 dark:bg-[#e879f9]/10',
  },
  'ai-integration': {
    border: 'border-[#fb923c]/20 dark:border-[#fb923c]/20',
    bg: 'hover:bg-[#fb923c]/5 dark:hover:bg-[#fb923c]/5',
    glow: 'hover:shadow-[0_8px_30px_rgba(251,146,60,0.08)] dark:hover:shadow-[0_8px_30px_rgba(251,146,60,0.1)]',
    tag: 'text-[#c2410c] dark:text-[#fb923c]',
    iconBg: 'bg-[#fb923c]/10 dark:bg-[#fb923c]/10',
  },
  'architecture-patterns': {
    border: 'border-[#818cf8]/20 dark:border-[#818cf8]/20',
    bg: 'hover:bg-[#818cf8]/5 dark:hover:bg-[#818cf8]/5',
    glow: 'hover:shadow-[0_8px_30px_rgba(129,140,248,0.08)] dark:hover:shadow-[0_8px_30px_rgba(129,140,248,0.1)]',
    tag: 'text-[#4f46e5] dark:text-[#818cf8]',
    iconBg: 'bg-[#818cf8]/10 dark:bg-[#818cf8]/10',
  },
  'devops-tools': {
    border: 'border-[#a78bfa]/20 dark:border-[#a78bfa]/20',
    bg: 'hover:bg-[#a78bfa]/5 dark:hover:bg-[#a78bfa]/5',
    glow: 'hover:shadow-[0_8px_30px_rgba(167,139,250,0.08)] dark:hover:shadow-[0_8px_30px_rgba(167,139,250,0.1)]',
    tag: 'text-[#7c3aed] dark:text-[#a78bfa]',
    iconBg: 'bg-[#a78bfa]/10 dark:bg-[#a78bfa]/10',
  },
};

// Simple emoji icons mapped by skill name
const skillIcons = {
  'JavaScript': '🟨',
  'TypeScript': '🔷',
  'Python': '🐍',
  'Vue.js': '💚',
  'React.js': '⚛️',
  'Next.js': '▲',
  'Redux Toolkit': '🔄',
  'ShadCN UI': '🎨',
  'HTML5': '📄',
  'CSS3': '🎨',
  'Tailwind CSS': '💨',
  'Bootstrap': '🅱️',
  'Node.js': '💚',
  'Express.js': '⚡',
  'FastAPI': '🚀',
  'REST APIs': '🔗',
  'JWT Authentication': '🔐',
  'MySQL': '🐬',
  'MongoDB': '🍃',
  'Qdrant': '🎯',
  'Redis': '🔴',
  'Cloudinary': '☁️',
  'Payment Gateways': '💳',
  'SMTP Services': '📧',
  'Ollama': '🦙',
  'OpenAI SDK': '🤖',
  'Hugging Face Transformers': '🤗',
  'RAG': '📚',
  'LangChain': '🔗',
  'LangGraph': '📊',
  'MCP Server': '🖥️',
  'Embeddings': '🧬',
  'System Design': '🏗️',
  'RESTful APIs': '🔌',
  'OOP': '🧱',
  'Async Programming': '⏳',
  'Caching Strategies': '💾',
  'Rate Limiting': '🚦',
  'Git': '📦',
  'Docker': '🐳',
  'GitHub Actions': '⚙️',
  'CI/CD': '🔄',
  'AWS': '☁️',
  'VPS': '🖥️',
  'Postman': '📮',
};

export default function SkillCard({ name, category }) {
  const accent = categoryAccent[category] || categoryAccent.frontend;
  const icon = skillIcons[name] || '💡';

  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl border ${accent.border} bg-white px-4 py-3.5 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 dark:bg-[#1a1a24] dark:hover:bg-[#22222e] ${accent.glow} ${accent.bg}`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base ${accent.iconBg} transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </span>
      <span className={`text-sm font-semibold ${accent.tag}`}>{name}</span>
    </div>
  );
}
