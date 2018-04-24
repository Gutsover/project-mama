import Layout from "../components/Layout";
import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from "../components/H3";
import SimpleCard from "../components/SimpleCard";
import StatCard from "../components/StatCard";
import Link from "next/link";

import { brandColors } from "../constantes/colors";

import ScrollAnimation from "react-animate-on-scroll";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1 id="relations-adherents">
          Mettre des moyens au service d'un projet
        </H1>

        <H2>Relation adhérents</H2>

        <div className="col s12 valign">
          <div className="valign-left">
            <SimpleCard cardClass="colored">
              <p>
                PÔLE SANTÉ TRAVAIL poursuit une ambition, proposer une réelle
                politique de service rendu aux entreprises adhérentes. Notre
                coeur de métier, ce sont les actions concernant le suivi de
                santé et le conseil en prévention des risques, en adéquation
                avec la réglementation et la prescription médicale, cependant
                PÔLE SANTÉ TRAVAIL a souhaité aussi intégrer dans ses équipes un
                service qui soit un facilitateur, voire dans certains cas, un
                médiateur.
              </p>

              <p>
                La relation-adhérents se déplace en entreprise sur leur demande
                ou à l’initiative de PÔLE SANTÉ TRAVAIL. Une vingtaine de
                rendez-vous sont fixés par mois.
              </p>
            </SimpleCard>
          </div>
          <div className="valign-right">
            <SimpleCard cardClass="colored">
              <p>
                Ces rencontres permettent aussi de recueillir les informations
                essentielles qui permettront une mise en place facilitée du
                suivi de santé, des actions plus pertinentes, des informations
                plus ciblées. Il s’agit de comprendre les processus et trouver
                les leviers d’amélioration et de performance de notre
                association.
              </p>
              <p>
                La relation adhérents procède également à une évaluation des
                outils d’interfaçage avec les entreprises comme l’espace
                adhérents ou le portail pénibilité, dans l’optique d’améliorer
                ces outils, régulièrement présentés en entreprise même, ce qui
                l’occasion de recueillir en direct le ressenti des utilisateurs.
              </p>

              <p>
                Cela facilite les relations entre le Service de Santé au Travail
                et l’entreprise adhérente.
              </p>
            </SimpleCard>
          </div>
        </div>

        <div className="col s12 valign">
          <div className="valign-left">
            <ScrollAnimation animateIn="bounceInLeft" duration="1">
              <StatCard cardClass="white">
                <strong>2 846</strong>
                <span>ADHESIONS POUR</span>

                <strong>15 221</strong>
                <span>SALARIÉS SUIVIS</span>

                <strong>3 385</strong>
                <span>RADIATIONS POUR</span>

                <strong>21 515</strong>
                <span>SALARIÉS SUIVIS</span>
              </StatCard>
            </ScrollAnimation>
          </div>
          <div className="valign-right">
            <ScrollAnimation animateIn="bounceInRight" duration="1">
              <img
                className="responsive-img"
                src="static/images/mettre-des-moyens/hand.jpeg"
              />
            </ScrollAnimation>
          </div>
        </div>

        <H2 id="communication">Communication</H2>

        <H3>Les supports d'information et de communication</H3>

        <div className="col s12 m8 offset-m2">
          <StatCard cardClass="colored">
            <strong>138</strong>
            <span>Supports réalisés ou mis à jour</span>
          </StatCard>
        </div>

        <div className="col s12 m3">
          <img
            className="responsive-img photo-support1"
            src="static/images/mettre-des-moyens/screen1.png"
            alt="support1"
            title="Cliquez ici pour visiter notre site"
          />
        </div>
        <div className="col s12 m3">
          <img
            className="responsive-img photo-support2"
            src="static/images/mettre-des-moyens/screen2.png"
            alt="support2"
            title="Cliquez ici pour visiter notre site"
          />
        </div>

        <div className="col s12 m3">
          <img
            className="responsive-img photo-support3"
            src="static/images/mettre-des-moyens/screen3.png"
            alt="support3"
            title="Cliquez ici pour visiter notre site"
          />
        </div>

        <div className="col s12 m3">
          <img
            className="responsive-img photo-support4"
            src="static/images/mettre-des-moyens/screen4.png"
            alt="support4"
            title="Cliquez ici pour visiter notre site"
          />
        </div>

        <H3>Le Web/Site Web de Pôle Santé Travail</H3>

        <div className="col s12">
          <SimpleCard cardClass="colored">
            <div className="col s12 m6">
              <StatCard cardClass="white">
                <ScrollAnimation animateIn="fadeIn" duration="2">
                  <strong>185 451</strong>
                  <span>VISITES</span>

                  <strong>381 782</strong>
                  <span>PAGES VUES</span>

                  <strong>75 464</strong>
                  <span>VISITEURS UNIQUES</span>

                  <strong>69 240</strong>
                  <span>NOUVELLES VISITES</span>
                </ScrollAnimation>
              </StatCard>
            </div>

            <p>NOUVEAU SITE INTERNET</p>

            <p>
              En 2017, PÔLE SANTÉ TRAVAIL a lancé un nouveau site web. Un comité
              web pluridisciplinaire s’est réuni trois fois pour définir les
              contenus et tester l’interface.
            </p>

            <p>
              En parallèle, le service communication a élaboré un cahier des
              charges et sélectionné un prestataire. Entre mars et octobre, le
              site a été monté. Depuis octobre dernier, l’interface livrée
              présente un système de double entrée employeur/salarié qui permet
              de cibler davantage les informations diffusées.
            </p>
            <p>
              Le site offre également une meilleure lisibilité des actions de
              PÔLE SANTÉ TRAVAIL et valorise les documents de prévention et les
              témoignages d’entreprises. L’objectif du projet était aussi de
              mieux comprendre l’intérêt d’adhérer à nos services et rendre
              lisibles les modalités d’adhésion.
            </p>
          </SimpleCard>
        </div>

        <div className="col s12 valign">
          <div className="valign-left">
            <StatCard cardClass="white">
              <ScrollAnimation animateIn="flash" duration="2">
                <strong>8/10</strong>
                <span>Note globale du site</span>
                <p>Obtenue après enquête</p>
              </ScrollAnimation>
            </StatCard>
          </div>
          <div className="valign-right">
            <Link href="https://www.polesantetravail.fr/">
              <a target="_blank">
                <img
                  className="responsive-img photo-site"
                  src="static/images/mettre-des-moyens/site.png"
                  alt="site pole sante travail"
                  title="Cliquez ici pour visiter notre site"
                />
              </a>
            </Link>
          </div>
        </div>

        <H2 id="immobiliers-investissements">Immobiliers et investissements</H2>

        <div className="col s12 valign">
          <div className="valign-left">
            <SimpleCard cardClass="colored">
              <p>AMENAGEMENTS</p>
              <ul className="card__list">
                <li>Somain</li>
                <li>Leers</li>
                <li>Roubaix</li>
                <li>Tourcoing</li>
                <li>Caestre</li>
                <li>Villeneuve d'ascq - La Plaine</li>
                <li>Saint-Omer</li>
                <li>Sainghin-en-Mélantois</li>
                <li>Vauban (Siège)</li>
              </ul>
            </SimpleCard>
          </div>
          <div className="valign-right">
            <SimpleCard cardClass="white">
              <strong>OUVERTURE DES CENTRES</strong>

              <p>LOMME HUMANICITE</p>

              <span>OUVERTURE EN FEVRIER 2017</span>

              <p>DOUAI DORIGNIES</p>

              <span>OUVERTURE EN DECEMBRE 2017</span>

              <figure>
                <img
                  className="responsive-img photo-centre-douai"
                  src="static/images/mettre-des-moyens/centre-douai.jpg"
                  alt="photo centre douai"
                />
                <figcaption>
                  <strong>Centre de Douai Dorignies</strong>
                </figcaption>
              </figure>
            </SimpleCard>
          </div>
        </div>

        <div className="col s12 m6 offset-m7">
          <a
            href="/bilan-financier"
            className="intro__discover waves-effect waves-light btn-large"
          >
            <i className="material-icons left">insert_chart</i>Continuer la
            visite
          </a>
        </div>
      </div>
    </div>

    <style jsx>{`
      .intro__discover {
        background-color: ${brandColors.green};
      }
    `}</style>
  </Layout>
);
