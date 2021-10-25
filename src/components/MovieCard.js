export default function MovieCard(props) {
  console.log(props.data);
  const { title, vote_average, overview, poster_path, release_date } =
    props.data;

  return (
    <div className="card">
      <img
        className="card__image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
        alt={`${title} Poster`}
      />
      <div className="card__data">
        <h2 className="card__name">{title}</h2>
        <p className="card__release-date">
          <strong>RELEASE DATE:</strong> {release_date}
        </p>
        <p className="card__rating">
          <strong>RATING:</strong> {vote_average}
        </p>
        <p className="card__overview">{overview}</p>
      </div>
    </div>
  );
}
