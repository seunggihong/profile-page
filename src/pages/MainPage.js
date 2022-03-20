import { motion } from "framer-motion";
import "../css/MainPage.css";

function MainPage() {
  return (
    <motion.div
      className="main_page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <img src="images/main.jpg" className="main-image" />
    </motion.div>
  );
}

export default MainPage;
