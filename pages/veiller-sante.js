import Link from "next/link";

import Services from "../services";

import Layout from "../components/Layout";
import Loader from "../components/Loader";
import IconCard from "../components/IconCard";
import StatCard from "../components/StatCard";
import SimpleCard from "../components/SimpleCard";
import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from "../components/H3";
import Build from "../components/Build";

class VeillerSante extends React.Component {
  state = {
    isLoading: true,
    data: {}
  };

  componentDidUpdate() {
    const hideNav = () => {
      document.querySelector(".sidenav").style.display = "none";
      document.querySelector(".sidenav-trigger").style.display = "none";
    };

    const showNav = () => {
      document.querySelector(".sidenav").style.display = "initial";
      document.querySelector(".sidenav-trigger").style.display = "initial";
    };

    const $imgs = [...document.querySelectorAll(".materialboxed")];

    $imgs.forEach($img => {
      M.Materialbox.init($img, {
        onOpenEnd: hideNav,
        onCloseEnd: showNav
      });
    });
  }

  async componentWillMount() {
    const page = this.props.url.pathname.slice(1);

    this.setState({
      isLoading: false,
      data: await Services.data.getData(page)
    });
  }
  render() {
    return (
      <Layout>
        <div className="container">
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <div className="row">
              <H1 id="suivi-de-sante">veiller sur la santé des salariés</H1>

              <H2>Un suivi de santé de qualité adapté à chaque salarié</H2>

              <H3>Dispositif de surveillance</H3>

              <div className="col s12 m6 offset-m3">
                <img
                  className="materialboxed photo-schema"
                  src="static/images/suivi-sante/schema.png"
                  title="Dispositif de surveillance"
                  data-caption="Dispositif de surveillance"
                />
                <span>Cliquez sur l'image pour l'agrandir</span>
              </div>

              <H2 id="parcours-de-sante">
                Un parcours de santé pour tous les salariés
              </H2>

              <H3>Tous les examens, les examens complémentaires</H3>

              <div className="col s12">
                <IconCard
                  cardClass="colored"
                  dataList={this.state.data["iconCard-1"]}
                />
              </div>

              <div className="col s12">
                <IconCard
                  cardClass="white"
                  dataList={this.state.data["iconCard-2"]}
                />
              </div>

              <div className="col s12 m4 offset-m1">
                <strong>Les examens en centre de santé travail</strong>
                <p>
                  Le médecin du travail peut demander la réalisation de certains
                  examens en adéquation avec le métier ou le secteur d’activité
                  du salarié ou sa santé.
                </p>
                <p>
                  Ainsi, l’équipe santé travail peut réaliser les examens
                  suivants lors des visites en centre de santé au travail : vue,
                  audition, physiologie, biologie.
                </p>

                <div className="partner">
                  <Link href="http://www.cerballiance.fr/home">
                    <a target="_blank">
                      <img
                        className="responsive-img photo logo-partner"
                        src="static/images/suivi-sante/logo-partner.jpg"
                        title="logo-partner"
                      />
                    </a>
                  </Link>
                  <p>
                    Pôle Santé Travail a noué un partenariat avec CERBALLIANCE,
                    un laboratoire d’analyses biologiques.
                  </p>
                  <p>
                    Aujourd’hui, toutes nos analyses passent par ce laboratoire
                    à la suite des prélévements effectués par nos équipes sur
                    prescription du médecin du travail
                  </p>
                </div>
              </div>

              <div className="col s12 m5 offset-m2">
                <strong>Les examens du plateau médical</strong>

                <p>
                  PÔLE SANTÉ TRAVAIL a intégré un plateau médical regroupant 24
                  spécialités : cardiologie, pneumologie, ORL, psychologie,
                  dermatologie, etc.
                </p>

                <p>
                  Le salarié qui vient en visite de santé au travail peut être
                  de nouveau convoqué pour passer des examens prescrits par le
                  médecin du travail. Cela participe au suivi de santé et permet
                  d’éclairer le diagnostic du médecin du travail. Ces services
                  sont compris dans la cotisation.
                </p>

                <div className="statsCards-container">
                  <IconCard
                    cardClass="colored"
                    dataList={this.state.data["iconCard-3"]}
                  />
                </div>
              </div>

              <H2 id="sante-travail-equipe">
                La santé au travail, un travail d'équipe
              </H2>

              <div className="col s12 valign">
                <div ClassName="valign-left">
                  <p>
                    Chaque salarié bénéficie d’un curriculum laboris qui retrace
                    son parcours professionnel.
                  </p>

                  <p>
                    Pour le constituer l’équipe santé travail recherche pour
                    chaque métier exercé par le salarié les différentes
                    expositions possibles (risques physiques, chimiques,
                    biologiques, organisationnels...).
                  </p>

                  <p>
                    Toutes les données seront tracées et ainsi conservées dans
                    le dossier médical santé travail. L’équipe santé travail
                    évalue ainsi le risque encouru par le salarié pour sa santé
                    aujourd’hui mais aussi pour demain.
                  </p>

                  <p>
                    Le curriculum laboris est confidentiel, il ne peut être
                    transmis à l’employeur.
                  </p>

                  <strong>79 EQUIPES SANTE TRAVAIL</strong>
                </div>

                <div className="valign-right">
                  <img
                    className="materialboxed photo-roue"
                    src="static/images/suivi-sante/roue.png"
                    title="roue"
                  />
                </div>
              </div>

              <H3>Présentation des acteurs</H3>

              <div className="col s12 m6">
                <SimpleCard cardClass="colored">
                  <strong>Le médecin du travail</strong>

                  <p>
                    Le médecin du travail anime et coordonne le suivi de santé
                    des salariés et des entreprises
                  </p>

                  <ul className="card__list">
                    <li>
                      Éviter toute altération de la santé des travailleurs du
                      fait de leur travail, notamment en surveillant leurs
                      conditions d'hygiène au travail, les risques de contagion
                      et leur état de santé.
                    </li>

                    <li>
                      Conseiller l’employeur sur l’ensemble des problématiques
                      liées aux conditions de travail.
                    </li>

                    <li>
                      Mener des actions en entreprise pour améliorer les
                      conditions de travail, agir en prévention de manière
                      collective sur la santé des salariés.
                    </li>

                    <li>
                      Participer à l'évaluation des risques dans le cadre de
                      l'élaboration de la fiche d'entreprise et dans le cadre de
                      son action sur le milieu de travail, qu'il conduit avec
                      les autres membres de l'équipe pluridisciplinaire.
                    </li>

                    <li>
                      Contribuer à la veille épidémiologique en menant des
                      études, des enquêtes, en contribuant à la recherche et
                      participer à la traçabilité des expositions
                      professionnelles.
                    </li>

                    <li>Animer une équipe santé travail </li>
                  </ul>
                </SimpleCard>

                <SimpleCard cardClass="white">
                  <strong>L'assistant d'équipe</strong>

                  <p>Une interface relationnelle</p>

                  <ul className="card__list">
                    <li>
                      Assurer un relationnel de premier niveau avec les
                      entreprises (information, suivi de dossier, etc.).
                    </li>

                    <li>
                      Prendre en charge l’aspect logistique des vacations santé
                      travail (convocations, prise de rendez-vous, accueil du
                      public, gestion des plannings, rédaction de courriers et
                      de compte-rendu).
                    </li>

                    <li>
                      Réaliser des examens complémentaires (visiotest, audio,
                      BDV, test urinaire…).
                    </li>

                    <li>
                      Assurer le recueil et la traçabilité des informations dans
                      le dossier médical du salarié.
                    </li>

                    <li>
                      Planifier, organiser les réunions d’équipe. Présence au
                      CHSCT (à la place du médecin avec des missions
                      spécifiques)
                    </li>
                  </ul>
                </SimpleCard>

                <p>
                  Dans un second temps, si le médecin du travail le juge
                  pertinent, d’autres acteurs peuvent être mobilisés au service
                  de l’entreprise selon les problématiques :
                </p>

                <strong>ERGONOME, METROLOGUE, TOXICOLOGUE, etc</strong>
              </div>

              <div className="col s12 m6">
                <SimpleCard cardClass="white">
                  <strong>L'INFIRMIER SANTÉ TRAVAIL </strong>

                  <p>Un rôle clé dans le suivi individuel et sur le terrain</p>

                  <ul className="card__list">
                    <li>
                      Réaliser des entretiens santé travail infirmiers (à la
                      demande du médecin du travail et sous la responsabilité de
                      celui-ci)
                    </li>

                    <li>
                      Recueillir les informations relatives à l’état de santé
                      physique et psychique du salarié, en rapport avec ses
                      conditions de travail, pour éventuellement alerter le
                      médecin sur des problématiques individuelles.
                    </li>

                    <li>
                      Sensibiliser les salariés aux conséquences de certaines
                      conditions de travail sur la santé, et à leur prévention
                      (conseils adaptés, etc.).
                    </li>

                    <li>
                      Apprécier et identifier, au travers d’une écoute active,
                      les aspects collectifs du travail, permettant au médecin
                      d’entreprendre d’éventuelles actions collectives.
                    </li>

                    <li>
                      Participer au réseau de vigilance en Santé Travail, via la
                      passation de questionnaires validés portant sur le travail
                      et la santé des salariés.
                    </li>

                    <li>Réaliser les examens complémentaires </li>

                    <li>Réaliser des Actions en Milieu de Travail</li>

                    <li>
                      Toute action relative à une problématique individuelle
                      médico-professionnelle :
                    </li>

                    <li>
                      Études de postes, suivi des préconisations du médecin du
                      travail, par rapport à une problématique médicale,
                      enquêtes Accidents du Travail / Maladies Professionnelles.
                    </li>

                    <li>
                      Toute action relative à une information collective et
                      sensibilisation dans le domaine santé travail voire santé
                      publique :
                    </li>

                    <li>
                      Présence en CHSCT (à la place du médecin, avec une mission
                      spécifique).
                    </li>
                  </ul>
                </SimpleCard>

                <SimpleCard cardClass="colored">
                  <strong>L'ASSISTANT SANTÉ TRAVAIL </strong>

                  <p>
                    Le repérage et l’identification des risques sur le terrain{" "}
                  </p>

                  <ul className="card__list">
                    <li>Réaliser les Accueils Nouveaux Adhérents (ANA) </li>

                    <li>
                      Aider à l’élaboration et à la mise à jour des fiches
                      d’entreprise
                    </li>

                    <li>
                      Assister administrativement ou participer à une action de
                      prévention de courte durée.
                    </li>

                    <li>Décrire un poste de travail. </li>

                    <li>
                      Informer l’entreprise adhérente sur l’évaluation des
                      risques professionnels
                    </li>

                    <li>
                      Réaliser des mesures métrologiques (bruit / ambiance
                      lumineuse / qualité de l’air…).
                    </li>
                  </ul>
                </SimpleCard>
              </div>

              <div className="col s12" />

              <H2 id="tracabilite">La traçabilité des actions</H2>

              <div className="col s12">
                <Build />
              </div>

              <H2 id="suivi-en-chiffres">Le suivi de santé en chiffres</H2>

              <div className="col s12 valign">
                <div className="valign-left">
                  <StatCard icone="people" cardClass="colored">
                    <strong>30 068</strong>

                    <p>Examens d'aptitude à l'embauche</p>

                    <strong>17 459</strong>

                    <p>Examens d'aptitude périodiques</p>

                    <strong>6 634</strong>

                    <p>Examens à la demande du salarié</p>
                  </StatCard>
                </div>
                <div className="valign-right">
                  <StatCard icone="content_paste" cardClass="white">
                    <strong>7 601</strong>

                    <p>Examens à la demande de l'employeur</p>

                    <strong>8 715</strong>

                    <p>Examens à la demande du médecin du travail</p>

                    <strong>11 709</strong>

                    <p>Examens de pré-reprise</p>
                  </StatCard>
                </div>
              </div>

              <div className="col s12 valign">
                <div className="valign-left">
                  <StatCard icone="accessible" cardClass="white">
                    <strong>82 450</strong>

                    <p>Avis d'aptitude</p>

                    <strong>4 510</strong>

                    <p>Avis d'inaptitude</p>

                    <strong>4 508</strong>

                    <p>Salariés déclarés inaptes</p>

                    <strong>14 265</strong>

                    <p>Propositions d'aménagements</p>
                  </StatCard>
                </div>

                <div className="valign-right">
                  <StatCard icone="assignment" cardClass="colored">
                    <strong>44 336</strong>

                    <p>VIP à l'embauche réalisées par les médecins</p>

                    <strong>21 717</strong>

                    <p>VIP à l'embauche réalisées par les infirmiers</p>

                    <strong>20 811</strong>

                    <p>VIP périodiques réalisées par les médecins</p>

                    <strong>225</strong>

                    <p>
                      Visites intermédiaires (postes à risques) par les médecins
                    </p>

                    <strong>2 961</strong>

                    <p>Visites intermédiaires par les infirmiers</p>
                  </StatCard>
                </div>
              </div>
              <div className="col s12 m6 offset-m7">
                <a
                  href="/ecouter-et-accompagner#aide-evaluation-risques"
                  className="intro__discover waves-effect waves-light btn-large"
                >
                  <i className="material-icons left">insert_chart</i>Continuer
                  la visite
                </a>
              </div>
            </div>
          )}
        </div>
        <style jsx global>{`
          .photo-schema {
            width: 500px;
          }

          .photo-roue {
            width: 250px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default VeillerSante;
