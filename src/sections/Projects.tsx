import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Loader2, RefreshCw } from "lucide-react";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { PROJECTS, GITHUB_USERNAME } from "../constants";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch public repos, sorted by last updated
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=all`
        );

        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();

        // Map GitHub API response to our Project interface
        const formattedProjects: Project[] = data
          .filter((repo: any) => !repo.fork) // Optional: filter out forks if you only want source repos
          .map((repo: any) => ({
            id: repo.id.toString(),
            title: repo.name.replace(/-/g, " ").replace(/_/g, " "), // Cleanup title
            description: repo.description || "No description available.",
            tags: repo.topics || [repo.language].filter(Boolean), // Use topics or language
            githubUrl: repo.html_url,
            liveUrl: repo.homepage,
            // Use GitHub's OpenGraph image service for dynamic previews
            imageUrl: `https://opengraph.githubassets.com/1/${repo.full_name}`,
          }));

        setProjects(formattedProjects);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setProjects(PROJECTS); // Fallback to static data on error
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const showMoreProjects = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <Section id="projects" className="bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <SectionTitle
          title="Featured Projects"
          subtitle={`Latest work and contributions from my GitHub (@${GITHUB_USERNAME}).`}
        />

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-accent" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="relative overflow-hidden aspect-video bg-neutral-100 dark:bg-neutral-800">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 text-primary capitalize group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-secondary text-sm mb-4 flex-1 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-xs text-secondary self-center">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
                          >
                            <Github className="w-4 h-4" />
                            Source
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {hasMore && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-16 text-center"
              >
                <Button
                  variant="outline"
                  onClick={showMoreProjects}
                  icon={<RefreshCw size={16} />}
                  className="min-w-[200px]"
                >
                  Load More Projects
                </Button>
              </motion.div>
            )}

            {projects.length === 0 && !loading && !error && (
              <div className="text-center py-20">
                <p className="text-secondary">No projects found.</p>
              </div>
            )}
          </>
        )}
      </div>
    </Section>
  );
};

export default Projects;
