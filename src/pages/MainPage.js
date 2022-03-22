import { motion } from "framer-motion";
import PhotoCard from "../utils/PhotoCard";
import "../css/MainPage.css";

function MainPage() {
  return (
    <motion.div
      className="main-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="main-page-content">
        <PhotoCard imgLink="images/main.jpg" title="Welcome, my Home Page" />
      </div>
    </motion.div>
  );
}

export default MainPage;
