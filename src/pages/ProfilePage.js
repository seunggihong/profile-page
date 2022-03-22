import { motion } from "framer-motion";
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
        <h2>Introduction</h2>
        <div className="profile-intro-frame">
          <div className="profile-intro-frame-img">
            <img src="images/ny.JPG" alt="profile"></img>
          </div>
          <div className="profile-intro-frame-text">
            <p>Name : Hong Seunggi</p>
            <p>Birth a day : March 10th, 1999</p>
            <p>City : Seoul (KR)</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfilePage;
