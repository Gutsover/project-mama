import Layout from "../components/Layout";
import H1 from "../components/H1";
import ScrollAnimation from "react-animate-on-scroll";

import { brandColors } from "../constantes/colors";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        <H1>perspectives</H1>

        <div className="col s12 valign">
          <div className="card valign-left">
            <div className="card-image">
              <img
                className="responsive-img photo-director"
                src="static/images/perspectives/hardy.png"
                alt="directeur"
              />
              <span className="card-title legend">
                Louis-Marie Hardy, <br />Directeur général Pôle Santé Travail
              </span>
            </div>
          </div>

          <div className="valign-right">
            <p>
              Depuis 2011, la santé au travail évolue pour s’adapter au monde de
              l’entreprise, aux salariés et aux ressources des Services de Santé
              au Travail Inter-entreprises.
            </p>

            <p>
              2016 est à ce titre une année charnière et PÔLE SANTÉ TRAVAIL
              s’est investi sur le plan national pour peser dans les débats et
              contribuer à l’écriture d’une nouvelle loi, qui s’écarte des
              systématismes pour permettre un suivi de santé adapté aux métiers,
              aux conditions de travail, à l’âge et aux situations personnelles
              des salariés.
            </p>
          </div>
        </div>

        <div className="col s12">
          <p>
            Une nouvelle loi qui replace la prévention au cœur de nos métiers
            avec une diminution des obligations liées au suivi de santé,
            permettant ainsi au médecin du travail de coordonner des actions
            collectives dans une démarche globale de prévention.
          </p>
        </div>

        <div className="col s12 valign">
          <div className="valign-left">
            <p>
              Une nouvelle loi qui donne du sens à l’action en entreprise,
              valorise le conseil et la proximité avec les entreprises et les
              branches professionnelles. Une nouvelle loi qui permette aussi au
              salarié de comprendre qu’il a une place majeure dans ce dispositif
              et que le service de santé au travail est présent tout au long de
              son parcours professionnel pour l’accompagner dans ses évolutions
              et pour prévenir la désinsertion professionnelle.
            </p>
          </div>

          <ScrollAnimation animateIn="fadeInRight">
            <i className="valign-right large material-icons">account_balance</i>
          </ScrollAnimation>
        </div>

        <div className="row">
          <div className="col s12 m6 offset-m3">
            <p>
              La loi a été publiée le 8 août 2016 sous l’appellation LOI n°
              2016-1088 relative au travail, à la modernisation du dialogue
              social et à la sécurisation des parcours professionnels (article
              102). Le décret d’application a été publié le 27 décembre 2016.
              L’année 2017 sera consacrée à sa mise en application.
            </p>
            <p>
              PÔLE SANTÉ TRAVAIL a anticipé ces avancées et l’année 2016 a été
              marquée par:
            </p>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <strong>
                UNE ORGANISATION CENTRÉE AUTOUR DE L’ÉQUIPE SANTÉ TRAVAIL
              </strong>
            </ScrollAnimation>
          </div>
        </div>

        <div className="row">
          <div className="col s12 valign">
            <ScrollAnimation animateIn="fadeInLeft">
              <i className="valign-left large material-icons">
                supervisor_account
              </i>
            </ScrollAnimation>
            <p className="valign-right">
              La santé au travail est un travail d’équipe et le déploiement de
              notre organisation s’est poursuivi. Plus de 50% des professionnels
              de terrain rentrent aujourd’hui dans ce dispositif soit 56 équipes
              sur l’ensemble du territoire de PÔLE SANTÉ TRAVAIL.
            </p>
          </div>

          <div className="col s12 m8 offset-m2">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <strong>
                UNE POLITIQUE PATRIMONIALE AMBITIEUSE QUI FAVORISE UN SUIVI DE
                SANTÉ DE QUALITÉ
              </strong>
            </ScrollAnimation>
          </div>

          <div className="col s12 valign">
            <p className="valign-left">
              PÔLE SANTÉ TRAVAIL poursuit un double objectif à travers la mise
              en place de sa politique patrimoniale : offrir aux équipes de
              terrain un outil de travail adapté et permettre aux salariés des
              entreprises adhérentes de recevoir le meilleur suivi de santé
              possible. En 2016, les travaux de rénovation ou d’agrandissement
              ont concerné Hallennes-lez- Haubourdin et Leers. Le centre de
              Lille Jeanne d’Arc a subi de grandes transformations pour
              accueillir les équipes de Lille Masséna.
            </p>
            <ScrollAnimation animateIn="fadeInRight">
              <i className="valign-right large material-icons">adjust</i>
            </ScrollAnimation>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12">
            <p>
              Le maillage territorial s’est affiné et en 2016, nous comptons 24
              centres de santé au travail.
            </p>
          </div>

          <div className="col s12 m8 offset-m2">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <strong>
                UNE MEILLEURE TRAÇABILITÉ ET UNE VALORISATION DE NOS ACTIONS
                AUTOUR D’UN PROJET DIGITAL : SANTÉ TRAVAIL 3.0
              </strong>
            </ScrollAnimation>
          </div>

          <div className="col s12 m12">
            <p>
              Santé travail 3.0 recouvre toutes les dimensions de notre métier.
              Dans ce projet global, plusieurs outils sont développés :
            </p>
            <p>
              Pour les entreprises adhérentes, le portail web a été complètement
              revu. Des groupes utilisateurs internes et externes ont pu tester
              les différentes fonctionnalités et améliorer l’outil. Le premier
              lot s’est concentré à améliorer l’expérience utilisateur sur les
              obligations de déclaration mais notre souhait est de proposer une
              interface relationnelle qui va au-delà du volet administratif et
              comptable et mieux identifier tous nos contacts en entreprises. En
              parallèle l’objectif est de mettre en lisibilité aussi nos actions
              en entreprise.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 valign">
            <ScrollAnimation animateIn="fadeInLeft">
              <i className="valign-left large material-icons">apps</i>
            </ScrollAnimation>
            <p className="valign-right">
              Pour les professionnels de santé au travail, le logiciel métier
              est en cours de refonte. Un cahier des charges a été rédigé afin
              d’adapter les outils aux nouvelles pratiques et aux enjeux de
              traçabilité des actions.
              <br />
              Pour tous les salariés de PÔLE SANTÉ TRAVAIL, un intranet
              collaboratif a été mis en place pour favoriser la circulation de
              l’information et promouvoir le travail collaboratif. Pour les
              services de santé au travail, PÔLE SANTÉ TRAVAIL a souhaité
              initier un partenariat unique en France avec 15 services de santé
              au travail pour la création d’une base de données en toxicologie
              qui permettra une meilleure identification des substances CMR et
              donc une action sur la substitution des produits.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m5 offset-m4">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <strong>"UNE COMMUNICATION EXTERNE ACTIVE"</strong>
            </ScrollAnimation>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12">
            <p>
              La politique de valorisation et de promotion de la santé au
              travail se poursuit. Le point fort de cette année 2016 a été
              l’organisation du salon PRÉVENTICA : pendant 3 jours conférences,
              ateliers, stand ont permis de donner de la lisibilité sur les
              missions du service de santé au travail. Des grands rendez-vous
              comme le salon des créateurs d’entreprises et des TPE « CREER » et
              les rencontres Experts-comptables ont été renouvelés. Dans le
              cadre de notre communication autour du nouvel espace adhérent, des
              testings utilisateurs ont été organisés. Notre participation à la
              1ère édition du salon des entreprises a été l’occasion de
              promouvoirce nouvel outil. L’assemblée générale 2016 a proposé des
              ateliers autour de la prévention des addictions, du maintien dans
              l’emploi et du juridique. 168 supports d’informations ont été
              réalisés sur l’année.
            </p>
          </div>

          <div className="col s12 m8 offset-m2">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <strong>
                "UNE POLITIQUE DE FORMATION ET DE RECRUTEMENT VOLONTARISTE"
              </strong>
            </ScrollAnimation>
          </div>

          <div className="col s12 m8 offset-m2">
            <p>
              Pour PÔLE SANTÉ TRAVAIL, la formation des salariés est un outil
              indispensable d’adaptation à l’évolution des missions et des
              métiers qui permet le développement des compétences. Un plan de
              formation ambitieux apporte une forte valeur ajoutée dans les
              prestations proposées en réponse aux besoins actuels des
              entreprises. 6,3 % de la masse salariale sont investis dans la
              formation. La Direction des Ressources Humaines s’implique
              également dans des événements comme le congrès des internes en
              santé travail pour nouer des liens privilégiés avec les médecins
              du travail de demain.
            </p>
          </div>
          <div className="col s12 m6 offset-m7">
            <a
              href="/fiche-identite"
              className="intro__discover waves-effect waves-light btn-large"
            >
              <i className="material-icons left">insert_chart</i>Continuer la
              visite
            </a>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .photo-director {
        padding: 0;
        margin-right: 1rem;
      }

      .photo-director + .legend {
        background-color: rgba(0, 0, 0, 0.3);
        text-align: center;
      }

      .legend {
        width: 100%;
      }

      .legend {
        width: 100%;
      }

      p {
        text-align: justify;
      }

      strong {
        color: ${brandColors.actual};
        display: block;
        font-size: 1.4rem;
        font-weight: bold;
        display: block;
        text-align: center;
      }

      i.valign-left,
      i.valign-right {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .intro__discover {
        background-color: ${brandColors.orange};
      }
    `}</style>
  </Layout>
);
