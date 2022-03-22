import { motion } from "framer-motion";
import { useEffect } from "react";
import axios from "axios";
import "../css/ProjectPage.css";

function ProjectPage() {
  const datas = [];
  const url = "https://api.github.com/users/seunggihong/repos";

  useEffect(() => {
    axios
      .get(url)
      .then((Response) => {
        for (let i = 0; i < Response.data.length; i++) {
          const newData = {
            name: Response.data[i].name,
            htmlUrl: Response.data[i].html_url,
          };
          datas.push(newData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
