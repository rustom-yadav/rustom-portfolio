import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiVuedotjs,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiCloudinary,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiNginx,
  SiVercel,
  SiGit,
  SiPostman,
  SiUbuntu,
} from 'react-icons/si';
import { 
  FaBrain, 
  FaLink, 
  FaProjectDiagram, 
  FaRobot, 
  FaEnvelope, 
  FaCreditCard, 
  FaCloud,
  FaDatabase,
  FaPalette,
  FaBolt,
  FaCodeBranch,
  FaServer,
  FaClock,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaTerminal,
  FaSmile,
  FaCode,
} from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

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

// Real brand logos mapped by skill name with official brand colors
const skillIcons = {
  'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'Python': <SiPython className="text-[#3776AB]" />,
  'Vue.js': <SiVuedotjs className="text-[#4FC08D]" />,
  'React.js': <SiReact className="text-[#61DAFB]" />,
  'Next.js': <SiNextdotjs className="text-slate-900 dark:text-white" />,
  'Redux Toolkit': <SiRedux className="text-[#764ABC]" />,
  'ShadCN UI': <FaPalette className="text-slate-900 dark:text-white" />,
  'HTML5': <FaHtml5 className="text-[#E34F26]" />,
  'CSS3': <FaCss3Alt className="text-[#1572B6]" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
  'Bootstrap': <SiBootstrap className="text-[#7952B3]" />,
  'Node.js': <SiNodedotjs className="text-[#339933]" />,
  'Express.js': <SiExpress className="text-slate-900 dark:text-white" />,
  'FastAPI': <SiFastapi className="text-[#009688]" />,
  'REST APIs': <TbApi className="text-[#FF5722]" />,
  'RESTful APIs': <TbApi className="text-[#FF5722]" />,
  'JWT Authentication': <SiJsonwebtokens className="text-[#d63aff]" />,
  'MySQL': <SiMysql className="text-[#4479A1]" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />,
  'Qdrant': <FaDatabase className="text-[#FC1B43]" />,
  'Redis': <SiRedis className="text-[#DC382D]" />,
  'Cloudinary': <SiCloudinary className="text-[#3448C5]" />,
  'Payment Gateways': <FaCreditCard className="text-[#6366f1]" />,
  'SMTP Services': <FaEnvelope className="text-[#eab308]" />,
  'Ollama': <FaRobot className="text-slate-900 dark:text-white" />,
  'OpenAI SDK': <FaRobot className="text-slate-900 dark:text-white" />,
  'Hugging Face Transformers': <FaSmile className="text-[#FFD21E]" />,
  'RAG': <FaBrain className="text-[#8b5cf6]" />,
  'LangChain': <FaLink className="text-[#10b981]" />,
  'LangGraph': <FaProjectDiagram className="text-[#10b981]" />,
  'MCP Server': <FaServer className="text-[#3b82f6]" />,
  'Embeddings': <FaCodeBranch className="text-[#ec4899]" />,
  'System Design': <FaProjectDiagram className="text-[#64748b]" />,
  'OOP': <FaCodeBranch className="text-[#f59e0b]" />,
  'Async Programming': <FaClock className="text-[#f43f5e]" />,
  'Caching Strategies': <FaDatabase className="text-[#06b6d4]" />,
  'Rate Limiting': <FaServer className="text-[#ef4444]" />,
  'Docker': <SiDocker className="text-[#2496ED]" />,
  'GitHub Actions': <SiGithubactions className="text-[#2088FF]" />,
  'CI/CD': <FaLink className="text-[#f59e0b]" />,
  'AWS': <FaAws className="text-[#FF9900]" />,
  'VPS': <FaServer className="text-[#6366f1]" />,
  'Linux': <SiLinux className="text-slate-900 dark:text-white" />,
  'Bash Scripting': <FaTerminal className="text-[#4EAA25]" />,
  'NGINX': <SiNginx className="text-[#009639]" />,
  'Gunicorn': <FaBolt className="text-[#499848]" />,
  'Vercel': <SiVercel className="text-slate-900 dark:text-white" />,
  'Render': <FaCloud className="text-slate-900 dark:text-white" />,
  'Git': <SiGit className="text-[#F05032]" />,
  'Postman': <SiPostman className="text-[#FF6C37]" />,
  'Visual Studio Code': <FaCode className="text-[#007ACC]" />,
  'Ubuntu': <SiUbuntu className="text-[#E95420]" />,
};

export default function SkillCard({ name, category }) {
  const accent = categoryAccent[category] || categoryAccent.frontend;
  const icon = skillIcons[name] || '💡';

  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl border ${accent.border} bg-white px-4 py-3.5 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 dark:bg-[#1a1a24] dark:hover:bg-[#22222e] ${accent.glow} ${accent.bg}`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xl ${accent.iconBg} transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </span>
      <span className={`text-sm font-semibold ${accent.tag}`}>{name}</span>
    </div>
  );
}
