import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Gitrepo from "../utils/Gitrepo";
import axios from "axios";
import "../css/ProjectPage.css";

function ProjectPage() {
  const [datas, setDatas] = useState([]);
  const url = "https://api.github.com/users/seunggihong/repos";

  useEffect(() => {
    axios
      .get(url)
      .then((Response) => {
        for (let i = 0; i < Response.data.length; i++) {
          const newData = (
            <Gitrepo
              key={Response.data[i].id}
              htmlUrl={Response.data[i].html_url}
              name={Response.data[0].name}
            />
          );
          let newDatas = [...datas];
          newDatas.push(newData);
          setDatas(newDatas);
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
      {console.log(datas)}
      <div className="project-frame">
        <div className="project-frame-div"></div>
      </div>
    </motion.div>
  );
}
export default ProjectPage;
