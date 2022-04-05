import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Gitrepo from "../utils/Gitrepo";
import axios from "axios";
import "../css/ProjectPage.css";

function importData(url, setDatas) {
  axios.get(url).then((response) => {
    var newDatas = [];
    for (var i = 0; i < response.data.length; i++) {
      const newData = {
        id: response.data[i].id,
        name: response.data[i].name,
        url: response.data[i].html_url,
      };
      newDatas.push(newData);
    }
    setDatas(newDatas);
  });
}

function ProjectPage() {
  const [datas, setDatas] = useState([]);
  const url = "https://api.github.com/users/seunggihong/repos";

  useEffect(() => {
    importData(url, setDatas);
    return datas;
  }, []);

  const gitrepoCreate = datas.map((datas, index) => (
    <Gitrepo id={datas.id} name={datas.name} htmlUrl={datas.url} key={index} />
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1>GitHub Repositories</h1>
      <div className="project_frame">
        <div className="project_frame_div">{gitrepoCreate}</div>
      </div>
    </motion.div>
  );
}
export default ProjectPage;
