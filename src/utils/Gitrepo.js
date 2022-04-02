import "../css/Gitrepo.css";

function Gitrepo(props) {
  return (
    <a key={props.id} href={props.htmlUrl}>
      {props.name}
    </a>
  );
}

export default Gitrepo;
