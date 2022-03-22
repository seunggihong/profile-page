import "../css/PhotoCard.css";

function PhotoCard(props) {
  return (
    <div className="photo-card-frame">
      <div className="photo-card-item">
        <img src={props.imgLink} />
        <p>
          <h1>{props.title}</h1>
        </p>
      </div>
    </div>
  );
}

export default PhotoCard;
