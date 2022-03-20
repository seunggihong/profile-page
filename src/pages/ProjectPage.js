import { motion } from "framer-motion";

function ProjectPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1>Project Page</h1>
    </motion.div>
  );
}
export default ProjectPage;
