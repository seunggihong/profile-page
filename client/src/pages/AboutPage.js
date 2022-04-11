import { motion } from "framer-motion";
import { FaInstagram, FaGithub } from "react-icons/fa";
import "../css/AboutPage.css";

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="about_frame">
        <h1>Made by Hong Seunggi</h1>
        <div className="about_frame_icon">
          <a href="https://github.com/seunggihong" target="blank">
            <FaGithub size={30} className="fa-github" />
          </a>
          <a href="https://www.instagram.com/iggnuxs/" target="blank">
            <FaInstagram size={30} className="fa-insta" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
export default AboutPage;
