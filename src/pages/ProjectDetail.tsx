
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { profile, projectsData, type ProjectData } from "@/data/portfolio";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<ProjectData | null>(null);
  
  useEffect(() => {
    // Get project data based on slug
    if (slug && projectsData[slug as keyof typeof projectsData]) {
      setProject(projectsData[slug as keyof typeof projectsData]);
      
      // Update document title when project loads
      document.title = `${projectsData[slug as keyof typeof projectsData].name} | ${profile.name} Portfolio`;
      
      // Scroll to top when navigating to project details
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-theme-dark-bg flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project not found</h2>
          <Link to="/" className="text-theme-accent1 hover:text-theme-accent2 transition-colors">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-theme-dark-bg min-h-screen">
      {/* Hero Section with Parallax */}
      <div className={`bg-gradient-to-r ${project.primaryColor} relative`}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-white mb-8 hover:text-gray-200 transition-colors hover:translate-x-[-5px] transform duration-200"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">
              {project.name}
            </h1>
            <p className="text-xl text-white mb-6">{project.tagline}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech: string) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-white bg-opacity-20 text-white rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="py-16 bg-theme-dark-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white font-display mb-6">Overview</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.fullDescription}
              </p>
              <div className="flex gap-4">
                <button className={`px-6 py-3 rounded-lg font-medium bg-gradient-to-r ${project.primaryColor} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src={project.coverImage} 
                alt={project.name} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-theme-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white font-display mb-4">Key Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover what makes {project.name} stand out from other applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-lg ${project.lightColor} bg-opacity-5 hover:bg-opacity-10 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg`}
              >
                <h3 className={`text-xl font-semibold mb-3 ${project.accentColor}`}>{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-theme-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white font-display mb-4">What Users Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Real feedback from people who use {project.name}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {project.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-theme-dark-bg p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 mr-1" fill="#FBBF24" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className={`py-16 bg-gradient-to-r ${project.primaryColor}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white font-display mb-4">Ready to Experience {project.name}?</h2>
            <p className="text-white opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied users and discover why {project.name} is the preferred choice.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-opacity-90 transition-colors transform hover:scale-105 duration-300 shadow-lg">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* More Projects */}
      <section className="py-16 bg-theme-dark-bg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white font-display">More Projects</h2>
            <Link to="/#projects" className="text-theme-accent1 flex items-center hover:text-theme-accent2 transition-colors group">
              View All
              <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(projectsData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, proj]: [string, ProjectData]) => (
                <Link 
                  key={key} 
                  to={`/project/${key}`}
                  className="bg-theme-dark-surface rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={proj.coverImage} 
                      alt={proj.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{proj.name}</h3>
                    <p className="text-gray-400 text-sm">{proj.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
