import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Gitrepo from "../utils/Gitrepo";
import axios from "axios";
import "../css/ProjectPage.css";

function ProjectPage() {
  const [datas, setDatas] = useState([]);
  const url = "https://api.github.com/users/seunggihong/repos";

  useEffect(() => {
    axios.get(url).then((response) => {
      for (var i = 0; i < response.data.lenth; i++) {
        const newData = {
          id: response.data[i].id,
          name: response.data[i].name,
          url: response.data[i].html_url,
        };
        const newDatas = [...datas];
        newDatas.push(newData);
        setDatas(newDatas);
      }
    });
  }, []);

  console.log(datas);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="project-frame">
        <div className="project-frame-div"></div>
      </div>
    </motion.div>
  );
}
export default ProjectPage;
