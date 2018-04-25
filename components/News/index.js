import Link from "next/link";

import { brandColors } from "../../constantes/colors";

class News extends React.Component {
  componentDidMount() {
    const elem = document.querySelector(".carousel");
    M.Carousel.init(elem);
  }

  render() {
    const newsList = this.props.newsList;
    return (
      <div className="carousel">
        {newsList.images.map((img, i) => (
          <Link
            href={"https://www.polesantetravail.fr/" + newsList.urls[i]}
            key={newsList.titles[i]}
          >
            <a className="carousel-item" target="_blank">
              <div className="card">
                <div className="card-image">
                  <img
                    className="img responsive news__image"
                    src={"https://www.polesantetravail.fr/" + img}
                  />
                  <span className="card-title">{newsList.titles[i]}</span>
                </div>
                <div className="card-content">
                  <p>{newsList.summaries[i]}</p>
                </div>
                <div className="card-action">Lire la suite</div>
              </div>
            </a>
          </Link>
        ))}
        <style jsx>{`
          .carousel {
            height: 160vh;
            top: -300px;
          }

          .card {
            width: 400px;
          }

          .card-title {
            color: white !important;
            background-color: rgba(0, 0, 0, 0.6);
          }

          .card-content {
            color: black !important;
          }

          .card-action {
            color: ${brandColors.actual} !important;
            display: flex;
            justify-content: flex-end;
          }

          @media only screen and (max-width: 992px) {
            .card {
              width: 250px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default News;
