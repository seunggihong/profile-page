import "../css/Gitrepo.css";

function Gitrepo(props) {
  return (
    <div className="git_repo_frame">
      <a key={props.id} href={props.htmlUrl}>
        {props.name}
      </a>
    </div>
  );
}

export default Gitrepo;
