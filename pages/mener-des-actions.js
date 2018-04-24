import Link from "next/link";

import Layout from "../components/Layout";
import H1 from "../components/H1";
import H2 from "../components/H2";

import StatCard from "../components/StatCard";

import { brandColors } from "../constantes/colors";

import ScrollAnimation from "react-animate-on-scroll";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1 id="chrd" className="main-title">
          Mener des actions au coeur des branches professionnelles
        </H1>

        <div className="col s12">
          <p>
            PÔLE SANTÉ TRAVAIL s’est fixé comme priorité d’accompagner les TPE
            de branches identifiées comme prioritaires dans le cadre de son
            projet de service et de prolonger son action vers les jeunes en
            formation dans ces métiers.
          </p>
        </div>
        <H2 id="chrd">CHRD (Cafés, Hôtels, Restaurants, Discothèques)</H2>
        <div className="col s12 valign">
          <div className="valign-left">
            <Link href="http://www.chodevant.fr/">
              <a target="_blank">
                <ScrollAnimation animateIn="bounceInLeft" duration="1">
                  <img
                    className="responsive-img"
                    src="static/images/mener-des-actions/bar.jpeg"
                  />
                  <span className="img-link">http://www.chodevant.fr</span>
                </ScrollAnimation>
              </a>
            </Link>
          </div>
          <div className="valign-right">
            <StatCard cardClass="colored">
              <strong>1 724</strong>
              <span>ENTREPRISES CONCERNEES</span>

              <strong>13 047</strong>
              <span>SALARIES CONCERNEES</span>
            </StatCard>
          </div>
        </div>

        <H2 id="colorisk">Colorisk (Peintres en bâtiments)</H2>

        <div className="col s12 valign">
          <div className="valign-left">
            <StatCard cardClass="colored">
              <strong>429</strong>
              <span>ENTREPRISES CONCERNEES</span>

              <strong>2 803</strong>
              <span>SALARIES CONCERNEES</span>
            </StatCard>
          </div>
          <div className="valign-right">
            <Link href="http://www.colorisk.fr/">
              <a target="_blank">
                <ScrollAnimation animateIn="bounceInRight" duration="1">
                  <img
                    className="responsive-img"
                    src="static/images/mener-des-actions/paint.jpeg"
                  />
                  <span className="img-link">http://www.colorisk.fr</span>
                </ScrollAnimation>
              </a>
            </Link>
          </div>
        </div>

        <H2 id="metiers-du-bois">Les métiers du bois</H2>

        <div className="col s12 valign">
          <div className="valign-left">
            <ScrollAnimation animateIn="bounceInLeft" duration="1">
              <img
                className="responsive-img"
                src="static/images/mener-des-actions/wood.jpeg"
              />
            </ScrollAnimation>
          </div>
          <div className="valign-right">
            <StatCard cardClass="colored">
              <strong>511</strong>
              <span>ENTREPRISES CONCERNEES</span>

              <strong>4 939</strong>
              <span>SALARIES CONCERNEES</span>
            </StatCard>
          </div>
        </div>
        <div className="col s12 m6 offset-m7">
          <a
            href="/mettre-des-moyens"
            className="intro__discover waves-effect waves-light btn-large"
          >
            <i className="material-icons left">insert_chart</i>Continuer la
            visite
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`
      p {
        text-align: center;
      }

      .img-link {
        background-color: rgba(0, 0, 0, 0.5);
        color: black;
        display: block;
        margin-top: -0.5rem;
        max-width: 300px;
        text-align: center;
      }

      .intro__discover {
        background-color: ${brandColors.orange};
      }
    `}</style>
  </Layout>
);
