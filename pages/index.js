import Head from "next/head";

import Layout from "../components/Layout";
import News from "../components/News";
import Loader from "../components/Loader";
import Link from "next/link";

import { brandColors } from "../constantes/colors";

import Services from "../services";

import ScrollAnimation from "react-animate-on-scroll";

class Index extends React.Component {
  state = {
    // color: {},
    isLoading: true,
    newsList: []
  };

  async componentWillMount() {
    // const color = await Services.theme.getTheme();

    this.setState({
      newsList: await Services.news.getNews(),
      // color: color,
      isLoading: false
    });

    // brandColors.actual = color.actual;
    // this.forceUpdate();
  }

  render() {
    return (
      <Layout>
        <div className="row">
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <div>
              <section className="intro z-depth-1">
                <div className="col s12 m6 offset-m3">
                  <h1 className="intro__title">
                    Rapport annuel d'activités 2017
                  </h1>
                </div>

                <div className="col s12">
                  <span className="year"> 2017 </span>
                  <Link href="https://polesantetravail.typeform.com/to/SQmWc8">
                    <a
                      target="_blank"
                      className="intro__survey waves-effect waves-light  btn-flat"
                    >
                      <i className="material-icons left">question_answer</i>accéder
                      au questionnaire
                    </a>
                  </Link>
                  <ScrollAnimation animateIn="flash">
                    <Link href="/perspectives">
                      <a className="intro__discover waves-effect waves-light btn-large">
                        <i className="material-icons left">insert_chart</i>commencer
                        la visite
                      </a>
                    </Link>
                  </ScrollAnimation>
                </div>
              </section>

              <section>
                <News newsList={this.state.newsList} />
              </section>
            </div>
          )}
        </div>
        <style jsx>{`
          .intro {
            background: url("static/images/home.jpg");
            background-size: cover;
            height: 100vh;
            position: relative;
          }

          .row {
            margin: 0;
          }

          @media only screen and (max-width: 992px) {
            .intro {
              background-position: 50%;
            }
          }

          .intro__title {
            background-color: rgba(255, 255, 255, 0.2);
            border-top: 3px solid white;
            color: white;
            margin-top: 20vh;
            font-size: 3rem;
            text-align: center;
            text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
            padding: 2rem;
            width: 100%;
          }

          @media only screen and (max-width: 992px) {
            .intro__title {
              font-size: 3rem;
              border: none;
              background-color: transparent;
            }
          }

          .intro__discover,
          .intro__survey {
            bottom: 20%;
            position: absolute;
            transition: transform 0.2s ease-out;
            width: 20rem;
          }

          .intro__discover {
            background-color: ${brandColors.actual} !important;
            right: 20%;
          }

          @media only screen and (max-width: 992px) {
            .intro__discover {
              font-size: 1rem;
              left: calc(50% - 10rem);
              bottom: 30%;
            }
          }

          .intro__survey {
            color: white;
            left: 20%;
          }

          @media only screen and (max-width: 992px) {
            .intro__survey {
              font-size: 1rem;
              left: calc(50% - 10rem);
              bottom: 5%;
            }
          }

          .intro__survey:hover,
          .intro__survey:active,
          .intro__survey:focus {
            transform: translateY(-0.1rem);
          }

          .intro__discover:hover,
          .intro__discover:active,
          .intro__discover:focus {
            background-color: ${brandColors.actualHover};
            transform: translateY(-0.1rem);
          }

          .year {
            background-color: rgba(245, 245, 245, 0.4);
            border: solid 5px White;
            font-size: 5rem;
            font-weight: bold;
            margin-left: 60%;
            padding: 1.5rem;
            display: none;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
