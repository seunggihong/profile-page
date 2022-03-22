import "../css/PhotoCard.css";

function PhotoCard(props) {
  return (
    <div className="photo-card-frame">
      <div className="photo-card-item">
        <img src={props.imgLink} alt="main" />
        <div>
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
