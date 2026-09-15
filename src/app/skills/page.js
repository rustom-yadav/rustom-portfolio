import SkillCard from '@/components/SkillCard';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { skills } from '@/data/skills';

const categoryLabels = {
  'programming-languages': 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  'databases-services': 'Databases & Services',
  'ai-integration': 'AI Integration',
  'architecture-patterns': 'Architecture & Patterns',
  'devops-tools': 'DevOps & Tools',
};

const categoryColors = {
  'programming-languages': 'text-[#d97706] dark:text-[#fbbf24]',
  frontend: 'text-[#0891b2] dark:text-[#22d3ee]',
  backend: 'text-[#059669] dark:text-[#34d399]',
  'databases-services': 'text-[#a21caf] dark:text-[#e879f9]',
  'ai-integration': 'text-[#c2410c] dark:text-[#fb923c]',
  'architecture-patterns': 'text-[#4f46e5] dark:text-[#818cf8]',
  'devops-tools': 'text-[#7c3aed] dark:text-[#a78bfa]',
};

const categoryIcons = {
  'programming-languages': '💻',
  frontend: '🎨',
  backend: '⚙️',
  'databases-services': '🗄️',
  'ai-integration': '🤖',
  'architecture-patterns': '🏗️',
  'devops-tools': '🛠️',
};

const categoryLineBg = {
  'programming-languages': 'from-[#fbbf24]/0 via-[#fbbf24]/30 to-[#fbbf24]/0',
  frontend: 'from-[#22d3ee]/0 via-[#22d3ee]/30 to-[#22d3ee]/0',
  backend: 'from-[#34d399]/0 via-[#34d399]/30 to-[#34d399]/0',
  'databases-services': 'from-[#e879f9]/0 via-[#e879f9]/30 to-[#e879f9]/0',
  'ai-integration': 'from-[#fb923c]/0 via-[#fb923c]/30 to-[#fb923c]/0',
  'architecture-patterns': 'from-[#818cf8]/0 via-[#818cf8]/30 to-[#818cf8]/0',
  'devops-tools': 'from-[#a78bfa]/0 via-[#a78bfa]/30 to-[#a78bfa]/0',
};

export default function Skills() {
  const byCategory = {};

  for (const skill of skills) {
    if (!byCategory[skill.category]) {
      byCategory[skill.category] = [];
    }

    byCategory[skill.category].push(skill);
  }

  // Define the order in which categories should appear
  const categoryOrder = [
    'programming-languages',
    'frontend',
    'backend',
    'databases-services',
    'ai-integration',
    'architecture-patterns',
    'devops-tools',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a12]">
      <main className="mx-auto max-w-[1200px] px-6 py-20">
        <AnimateOnScroll>
          <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-[#e4e4e7]">
            Skills
          </h2>
          <p className="mb-12 text-sm text-slate-500 dark:text-[#a1a1aa]">
            Technologies and tools I work with
          </p>
        </AnimateOnScroll>
        <div className="space-y-14">
          {categoryOrder.map((category, catIndex) => {
            const items = byCategory[category];
            if (!items) return null;

            return (
              <AnimateOnScroll key={category} delay={catIndex * 100}>
                <section>
                  {/* Category header with icon and decorative line */}
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-lg dark:bg-[#1a1a24]">
                      {categoryIcons[category] || '💡'}
                    </span>
                    <h3
                      className={`text-lg font-semibold ${categoryColors[category] || 'text-[#e4e4e7]'}`}
                    >
                      {categoryLabels[category] || category}
                    </h3>
                    <div className={`h-px flex-1 bg-gradient-to-r ${categoryLineBg[category] || 'from-transparent via-slate-200 to-transparent'}`} />
                    <span className="text-xs font-medium text-slate-400 dark:text-[#52525b]">
                      {items.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {items.map((skill) => (
                      <SkillCard
                        key={skill.id}
                        name={skill.name}
                        category={skill.category}
                      />
                    ))}
                  </div>
                </section>
              </AnimateOnScroll>
            );
          })}
        </div>
      </main>
    </div>
  );
}
