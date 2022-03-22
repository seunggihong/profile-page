import { motion } from "framer-motion";
import "../css/ProjectPage.css";

function ProjectPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="project-frame">
        <canvas className="project-frame-canvas"></canvas>
      </div>
    </motion.div>
  );
}
export default ProjectPage;
