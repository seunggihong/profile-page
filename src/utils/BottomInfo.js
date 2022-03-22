import "../css/BottomInfo.css";
import { FaInstagram, FaGithub } from "react-icons/fa";

function BottomInfo() {
  return (
    <div className="bottom-info-frame">
      <a href="https://github.com/seunggihong" target="blank">
        <FaInstagram size={30} className="fa-insta" />
      </a>
      <a href="https://www.instagram.com/iggnuxs/" target="blank">
        <FaGithub size={30} className="fa-github" />
      </a>
    </div>
  );
}

export default BottomInfo;
