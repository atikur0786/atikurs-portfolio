import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Eye, X } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { PERSONAL_INFO } from "../constants";

const Resume: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section id="resume">
      <div className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent blur-3xl rounded-full" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-white blur-3xl rounded-full mix-blend-overlay" />
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FileText className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-neutral-300 max-w-xl mx-auto mb-10 text-lg">
            I'm currently available for freelance projects and full-time roles.
            Grab a copy of my resume or view it directly here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="white"
              className="w-full sm:w-auto"
              icon={Eye}
            >
              View Resume
            </Button>
            <Button
              variant="outline-white"
              href={PERSONAL_INFO.resumeUrl}
              className="w-full sm:w-auto"
              icon={Download}
              download
            >
              Download PDF
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-white flex items-center justify-center p-4 sm:p-8">
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl relative flex flex-col overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              <div className="flex justify-between items-center p-4 border-b border-neutral-100 bg-neutral-50">
                <h3 className="font-semibold text-primary">Resume Preview</h3>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    download="Resume"
                    className="p-2 hover:bg-neutral-200 rounded-full transition-colors text-secondary hover:text-primary"
                    title="Download PDF"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-neutral-200 rounded-full transition-colors text-secondary hover:text-primary"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-neutral-100 relative">
                <object
                  data={PERSONAL_INFO.resumeUrl}
                  type="application/pdf"
                  className="w-full h-full border-none"
                >
                  <div className="pdf-fallback">
                    <p>It seems your browser doesn't support embedded PDFs.</p>
                    <p>No worries! You can:</p>
                    <a
                      href={PERSONAL_INFO.resumeUrl}
                      download
                      className="fallback-button"
                    >
                      Download the PDF
                    </a>
                    <a
                      href={PERSONAL_INFO.resumeUrl}
                      target="_blank"
                      className="fallback-button"
                    >
                      Open in New Tab
                    </a>
                  </div>
                </object>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Resume;
