import "../css/BottomInfo.css";
import { FaInstagram, FaGithub } from "react-icons/fa";

function BottomInfo() {
  return (
    <div className="bottom-info-frame">
      <a href="https://github.com/seunggihong" target="_blank">
        <FaInstagram size={30} color="white" />
      </a>

      <a href="https://www.instagram.com/iggnuxs/" target="_blank">
        <FaGithub size={30} color="white" />
      </a>
    </div>
  );
}

export default BottomInfo;
