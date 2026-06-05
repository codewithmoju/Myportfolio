import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code, Smartphone, Users, Award, Coffee, Clock, Star, Zap, Lightbulb } from "lucide-react";

const Statistics = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    commits: 0
  });

  const finalStats = {
    projects: 10,
    clients: 3,
    experience: 2,
    commits: 200
  };

  const statsData = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      label: "Mobile Apps Built",
      value: finalStats.projects,
      suffix: "+",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: "Satisfied Clients",
      value: finalStats.clients,
      suffix: "",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      label: "Years Experience",
      value: finalStats.experience,
      suffix: "+",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <Code className="w-8 h-8" />,
      label: "Code Commits",
      value: finalStats.commits,
      suffix: "+",
      gradient: "from-orange-500 to-red-400"
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => ({
        projects: Math.min(prev.projects + Math.ceil(finalStats.projects / steps), finalStats.projects),
        clients: Math.min(prev.clients + Math.ceil(finalStats.clients / steps), finalStats.clients),
        experience: Math.min(prev.experience + Math.ceil(finalStats.experience / steps), finalStats.experience),
        commits: Math.min(prev.commits + Math.ceil(finalStats.commits / steps), finalStats.commits)
      }));
    }, stepDuration);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setCounters(finalStats);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Achievements & Impact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Numbers that reflect my dedication to creating exceptional mobile experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.gradient} text-white mb-4 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
              >
                {index === 0 && counters.projects}
                {index === 1 && counters.clients}
                {index === 2 && counters.experience}
                {index === 3 && counters.commits}
                <span className="text-brand-accent">{stat.suffix}</span>
              </motion.div>
              
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { Icon: Award, text: "Top Rated Developer" },
            { Icon: Star, text: "5-Star Reviews" },
            { Icon: Zap, text: "Fast Delivery" },
            { Icon: Lightbulb, text: "Innovation Award" }
          ].map((badge, index) => {
            const BadgeIcon = badge.Icon;
            return (
              <motion.div
                key={badge.text}
                className="flex items-center gap-2 bg-surface-dark px-4 py-2 rounded-full border border-gray-700"
                whileHover={{ scale: 1.05, borderColor: "var(--brand-secondary)" }}
                transition={{ duration: 0.2 }}
              >
                <BadgeIcon className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">{badge.text}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
