import "../css/Gitrepo.css";

function Gitrepo(props) {
  return (
    <div className="git-repo-frame">
      <a href={props.htmlUrl}>{props.name}</a>
    </div>
  );
}

export default Gitrepo;