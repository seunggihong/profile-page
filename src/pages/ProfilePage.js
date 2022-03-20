import { motion, AnimatePresence } from "framer-motion";
import "../css/ProfilePage.css";

function ProfilePage() {
  return (
    <motion.div
      className="profile-body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="profile-intro">
        <h3>Introduction</h3>
      </div>
    </motion.div>
  );
}

export default ProfilePage;
