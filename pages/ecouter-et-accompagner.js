import Link from "next/link";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

import Layout from "../components/Layout";
import Loader from "../components/Loader";
import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from "../components/H3";
import SimpleCard from "../components/SimpleCard";
import IconCard from "../components/IconCard";
import StatCard from "../components/StatCard";
import Build from "../components/Build";

import Services from "../services";

import { brandColors } from "../constantes/colors";

import ScrollAnimation from "react-animate-on-scroll";

class EcouterEtAccompagner extends React.Component {
  state = {
    isLoading: true,
    data: {}
  };
  async componentWillMount() {
    const page = this.props.url.pathname.slice(1);
    console.log(this.props);
    console.log(page);

    this.setState({
      isLoading: false,
      data: await Services.data.getData(page)
    });

    console.dir(this.state.data);
  }

  render() {
    return (
      <Layout>
        <div className="container">
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <div className="row">
              <H1 id="aide-evaluation-risques">
                Ecouter et accompagner les entreprises dans leur démarche de
                prévention
              </H1>
              <H2>L'aide à l'évaluation des risques</H2>
              <div className="col s12">
                <Build />
              </div>
              <H2 id="conseils-en-entreprise">Conseils en entreprise</H2>
              <div className="col s12">
                <Build />
              </div>
              <H3 className="third-title">Etudes de postes</H3>
              <div className="col s12">
                <Build />
              </div>
              <H3 className="third-title">Organisation de travail</H3>
              <div className="col s12">
                <Build />
              </div>
              <H2 id="action-en-milieu-de-travail">
                Les actions en milieu de travail
              </H2>
              <div className="col s12">
                <p>
                  Être sur le terrain pour mener des actions de prévention est
                  l’essence même du service de santé au travail.
                </p>
              </div>
              <div className="col s12 center-align">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                  <strong className="amt">
                    20 425 Action en Milieu de Travail réalisées en 2017
                  </strong>
                </ScrollAnimation>
              </div>
              <div className="col s12">
                <SimpleCard cardClass="white">
                  <strong>
                    Les Actions en Milieu de Travail sont très diversifiées,
                    adaptées à chaque entreprise et à ses problématiques
                  </strong>
                  <div className="card__list-container">
                    <ul className="card__list card__list-left">
                      <li>
                        l’étude de poste en vue de l’amélioration des conditions
                        de travail, de leur adaptation dans certaines situations
                        ou du maintien dans l’emploi,
                      </li>
                      <li>
                        l’identification et l’analyse des risques
                        professionnels,
                      </li>
                      <li>
                        la délivrance de conseils en matière d’organisation des
                        secours et des services d’urgence,
                      </li>
                      <li>des actions de sensibilisation, </li>
                      <li>
                        des mises en place de nouvelles techniques de
                        production, modifications d’équipements,
                      </li>
                      <li>l’évaluation des risques professionnels </li>
                      <li>
                        l’élaboration et la mise à jour de la fiche
                        d’entreprise,
                      </li>
                    </ul>
                    <ul className="card__list card__list-right">
                      <li>
                        la participation aux réunions du Comité d’Hygiène, de
                        Sécurité et des Conditions de Travail,
                      </li>
                      <li>la réalisation de mesures métrologiques,</li>
                      <li>
                        l’animation de campagnes d’information et de
                        sensibilisation aux questions de santé publique en
                        rapport avec l’activité professionnelle,
                      </li>
                      <li>les enquêtes épidémiologiques,</li>
                      <li>la formation aux risques spécifiques,</li>
                      <li>
                        l’étude de toute nouvelle technique de production,
                      </li>
                      <li>
                        l’élaboration des actions de formation à la sécurité...
                      </li>
                    </ul>
                  </div>
                </SimpleCard>
              </div>
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
              <div className="col s12">
                <IconCard
                  cardClass="colored"
                  dataList={this.state.data["iconCard-3"]}
                />
              </div>
              <H3>Ergonomie - Métrologie</H3>
              <div className="col s12 m6">
                <p className="ergo__intro">
                  Le service ergonomie intervient auprès des entreprises pour
                  les aider à structurer une démarche de prévention à partir
                  d’une demande santé travail sur les thématiques suivantes :
                  TMS, RPS, conception/ corrections des espaces et outils de
                  travail…
                </p>
              </div>
              <div className="col s12 m6">
                <SimpleCard cardClass="white">
                  <p>
                    INTERVENTIONS ERGONOMIQUES EN PRÉVENTION DES RISQUES
                    PROFESSIONNELS
                  </p>
                  <ul className="card__list">
                    <li>
                      Information et conseil : 1er niveau d’intervention pour
                      analyser et reformuler la demande : 1 à 2 journées
                    </li>
                    <li>
                      Diagnostic : Identification et mise en visibilité des
                      risques et présentations de plans d’actions de prévention
                      (1 à 6 jours)
                    </li>
                    <li>
                      Accompagnement : Évaluation des risques et mise en oeuvre
                      des plans d’actions de prévention avec l’entreprise (> 6
                      jours)
                    </li>
                  </ul>
                </SimpleCard>
              </div>
              <div className="col s12 m6">
                <StatCard className="risques-chimiques" cardClass="colored">
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>27 %</strong>
                    <span>
                      D’ACTIONS RÉALISÉES EN PLUS QU’EN 2016 À EFFECTIFS
                      CONSTANTS
                    </span>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>57 %</strong>
                    <span>
                      DES THÉMATIQUES INVESTIGUÉES RELÈVENT DE L’ORGANISATION DU
                      TRAVAIL (CONDITIONS DE TRAVAIL/TMS ET RPS)
                    </span>
                  </ScrollAnimation>
                </StatCard>
              </div>
              <div className="col s12 m6">
                <StatCard className="risques-chimiques" cardClass="colored">
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>74 %</strong>
                    <span>
                      DES ACTIONS RÉALISÉES RELÈVENT DE LA DÉMARCHE DE
                      PRÉVENTION COLLECTIVE
                    </span>{" "}
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>94 %</strong>
                    <span>
                      DES ACTIONS RÉALISÉES RELÈVENT D’ACTIVITÉS EXPERTES
                      (CONSEIL / DIAGNOSTIC / ACCOMPAGNEMENT)
                    </span>
                  </ScrollAnimation>
                </StatCard>
              </div>
              <div className="col s12">
                <StatCard cardClass="colored">
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>471</strong>
                    <span>
                      DEMANDES D’INTERVENTION PARVENUES AU SERVICE ERGONOMIE
                    </span>
                  </ScrollAnimation>
                </StatCard>
              </div>
              <H3>
                Répartition des actions en ergonomie par typologie
                d'intervention
              </H3>
              <div className="chart-container">
                <ResponsivePie
                  data={this.state.data["ergoTypoInternaute"]}
                  margin={{
                    top: 55,
                    right: 115,
                    bottom: 0,
                    left: 111
                  }}
                  innerRadius={0.55}
                  colors="d320c"
                  colorBy="id"
                  borderColor="inherit:darker(0.6)"
                  radialLabelsSkipAngle={0}
                  radialLabelsTextXOffset={8}
                  radialLabelsTextColor="#333333"
                  radialLabelsLinkOffset={3}
                  radialLabelsLinkDiagonalLength={26}
                  radialLabelsLinkHorizontalLength={36}
                  radialLabelsLinkStrokeWidth={1}
                  radialLabelsLinkColor="inherit"
                  slicesLabelsSkipAngle={0}
                  slicesLabelsTextColor="#333333"
                  animate={false}
                  motionStiffness={110}
                  motionDamping={16}
                  legends={[
                    {
                      anchor: "bottom",
                      direction: "row",
                      translateY: 56,
                      itemWidth: 100,
                      itemHeight: 14,
                      symbolSize: 14,
                      symbolShape: "circle"
                    }
                  ]}
                />
              </div>
              <H3>Répartition des actions en ergonomie par thématiques</H3>
              <div className="chart-container">
                <ResponsiveBar
                  data={this.state.data["ergoThematiques"]}
                  keys={["number"]}
                  indexBy="type"
                  margin={{
                    top: 50,
                    right: 20,
                    bottom: 100,
                    left: 60
                  }}
                  padding={0.3}
                  colors="d320b"
                  colorBy="id"
                  defs={[
                    {
                      id: "dots",
                      type: "patternDots",
                      background: "inherit",
                      color: "#38bcb2",
                      size: 4,
                      padding: 1,
                      stagger: true
                    },
                    {
                      id: "lines",
                      type: "patternLines",
                      background: "inherit",
                      color: "#eed312",
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                    }
                  ]}
                  fill={[
                    {
                      match: {
                        id: ""
                      },
                      id: ""
                    },
                    {
                      match: {
                        id: ""
                      },
                      id: ""
                    }
                  ]}
                  borderColor="inherit:darker(1.6)"
                  axisBottom={{
                    orient: "bottom",
                    tickSize: 12,
                    tickPadding: 5,
                    tickRotation: 35,
                    legend: "",
                    legendPosition: "center",
                    legendOffset: 36
                  }}
                  axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "",
                    legendPosition: "center",
                    legendOffset: -40
                  }}
                  labelSkipWidth={12}
                  labelTextColor="#ffffff"
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
                  legends={[
                    {
                      dataFrom: "keys",
                      anchor: "bottom-right",
                      direction: "column",
                      translateX: 120,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemsSpacing: 2,
                      symbolSize: 20
                    }
                  ]}
                />
              </div>
              <div className="col s12">
                <StatCard cardClass="colored">
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>272</strong>
                    <span>ACTIONS RÉALISÉES</span>
                  </ScrollAnimation>
                </StatCard>
              </div>
              <H3>Risque chimique</H3>
              <div className="col s12">
                <SimpleCard cardClass="white">
                  <p>
                    Le Service Toxicologie intervient dans les domaines suivants
                    :
                  </p>
                  <strong>RÔLE DE CONSEIL</strong>
                  <p>
                    Ces interventions regroupent l’ensemble des interrogations
                    des membres de l’équipe santé travail sur une thématique
                    toxicologique précise (réglementation, toxicité spécifique,
                    protection individuelle…). Les questions peuvent être par
                    mail, courrier interne, ou une demande de RDV (dans un
                    centre ou au service de toxicologie) avec un toxicologue.
                  </p>
                  <strong>ANALYSE DES FDS</strong>
                  <p>
                    Dépistage des CMR et analyse des principaux risques. FDS
                    saisies et consultables dans TOXILIST.
                  </p>
                  <div className="toxilist">
                    <Link href="https://www.toxilist.fr/">
                      <a target="_blank">
                        <img
                          className="responsive-img photo logo-toxilist"
                          src="static/images/ecouter-et-accompagner/logo-toxilist.png"
                          title="En savoir plus sur Toxilist"
                        />
                      </a>
                    </Link>
                  </div>
                  <strong>
                    VISITE D’ENTREPRISE ACCOMPAGNÉE VISITE DIAGNOSTIC
                  </strong>
                  <p>
                    Prestation qui consiste à accompagner un médecin du travail
                    lors de sa visite d’entreprise. C’est une intervention avec
                    échanges, mise en garde, et compte rendu de visite.
                    L’objectif est d’orienter le médecin sur les principaux
                    risques chimiques susceptibles d’être rencontrés dans un
                    secteur d’activité.
                  </p>
                  <strong>INTERVENTION EN ENTREPRISE AVEC ÉTUDE POSTE</strong>
                  <p>
                    Sur une thématique précise, avec ou sans métrologie, mise en
                    place de plan de prévention, accompagnement méthodologique…
                  </p>
                  <strong>
                    ACCOMPAGNEMENT DANS LA MISE EN PLACE DE PLAN DE PRÉVENTION
                  </strong>
                </SimpleCard>
              </div>
              <div className="col s12">
                <StatCard cardClass="colored">
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>332</strong>
                    <span>
                      DEMANDES D’INTERVENTION PARVENUES AU SERVICE TOXICOLOGIE
                    </span>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>56 %</strong>
                    <span>
                      DU TEMPS DE TRAVAIL CONCERNE LES INTERVENTIONS EN
                      ENTREPRISE
                    </span>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>1 968</strong>
                    <span>FDS CRÉÉES EN 2017</span>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>285</strong>
                    <span>ACTIONS RÉALISÉES EN 2017</span>
                  </ScrollAnimation>
                </StatCard>
              </div>
              <H3>
                Répatition des actions en toxicologie par typologie
                d'intervention
              </H3>
              <div className="chart-container">
                <ResponsivePie
                  data={this.state.data["toxiInternautes"]}
                  margin={{
                    top: 55,
                    right: 135,
                    bottom: 0,
                    left: 111
                  }}
                  innerRadius={0.55}
                  colors="d320c"
                  colorBy="id"
                  borderColor="inherit:darker(0.6)"
                  radialLabelsSkipAngle={0}
                  radialLabelsTextXOffset={8}
                  radialLabelsTextColor="#333333"
                  radialLabelsLinkOffset={3}
                  radialLabelsLinkDiagonalLength={26}
                  radialLabelsLinkHorizontalLength={36}
                  radialLabelsLinkStrokeWidth={1}
                  radialLabelsLinkColor="inherit"
                  slicesLabelsSkipAngle={0}
                  slicesLabelsTextColor="#333333"
                  animate={false}
                  motionStiffness={110}
                  motionDamping={16}
                  legends={[
                    {
                      anchor: "bottom",
                      direction: "row",
                      translateY: 56,
                      itemWidth: 100,
                      itemHeight: 14,
                      symbolSize: 14,
                      symbolShape: "circle"
                    }
                  ]}
                />
              </div>

              <H3>Répartition des actions en toxicologie par thématiques</H3>
              <div className="chart-container">
                <ResponsiveBar
                  data={this.state.data["toxiThematiques"]}
                  keys={["number"]}
                  indexBy="type"
                  margin={{
                    top: 50,
                    right: 15,
                    bottom: 100,
                    left: 60
                  }}
                  padding={0.3}
                  colors="set2"
                  colorBy="id"
                  defs={[
                    {
                      id: "dots",
                      type: "patternDots",
                      background: "inherit",
                      color: "#38bcb2",
                      size: 4,
                      padding: 1,
                      stagger: true
                    },
                    {
                      id: "lines",
                      type: "patternLines",
                      background: "inherit",
                      color: "#eed312",
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                    }
                  ]}
                  fill={[
                    {
                      match: {
                        id: ""
                      },
                      id: ""
                    },
                    {
                      match: {
                        id: ""
                      },
                      id: ""
                    }
                  ]}
                  borderColor="inherit:darker(1.6)"
                  axisBottom={{
                    orient: "bottom",
                    tickSize: 12,
                    tickPadding: 5,
                    tickRotation: 35,
                    legend: "",
                    legendPosition: "center",
                    legendOffset: 36
                  }}
                  axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "",
                    legendPosition: "center",
                    legendOffset: -40
                  }}
                  labelSkipWidth={12}
                  labelTextColor="#FFFFF"
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
                  legends={[
                    {
                      dataFrom: "keys",
                      anchor: "bottom-right",
                      direction: "column",
                      translateX: 120,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemsSpacing: 2,
                      symbolSize: 20
                    }
                  ]}
                />
              </div>

              <div className="col s12">
                <StatCard cardClass="colored">
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>274</strong>
                    <span>ENTREPRISES CONCERNÉES</span>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>28 826</strong>
                    <span>SALARIÉS CONCERNÉS</span>
                  </ScrollAnimation>
                </StatCard>
              </div>

              <H2 id="enquetes-diagnostic">Enquêtes et diagnostic</H2>

              <H3>Epidémiologie (Indicateurs Santé Travail)</H3>

              <div className="col s12">
                <SimpleCard cardClass="white">
                  <p>
                    Les demandes d’intervention concernant les entreprises
                    restent stables par rapport à l’année dernière.
                  </p>
                  <p>
                    La majorité des études sont réalisées grâce à la mise en
                    place de
                  </p>
                  <div className="evrest">
                    <Link href="http://evrest.istnf.fr">
                      <a target="_blank">
                        <img
                          className="responsive-img photo logo-evrest"
                          src="static/images/ecouter-et-accompagner/logo-evrest.jpg"
                          title="En savoir plus sur Evrest"
                        />
                      </a>
                    </Link>
                  </div>
                  <p>
                    Ceci étant des questionnaires spécifiques commencent à être
                    utilisés.
                  </p>
                  <p>
                    Ces questionnaires demandent plus de temps de préparation et
                    d’analyse. Toutes les étapes de l’étude doivent être créées
                    (Mise en forme du questionnaire, création du masque de
                    saisie, saisie des données, analyses et rendus).
                  </p>
                </SimpleCard>
              </div>

              <div className="col s12">
                <StatCard cardClass="colored">
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>30</strong>
                    <span>ÉTUDES ET ENQUÊTES EN DIRECTION DES ENTREPRISES</span>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>34</strong>
                    <span>ACTIONS REALISEES</span>
                  </ScrollAnimation>
                </StatCard>
              </div>

              <H3>Etudes et projets</H3>

              <div className="col s12">
                <SimpleCard cardClass="white">
                  <strong>OBSERVATOIRE EVREST</strong>
                  <ul className="card__list">
                    <li>
                      Animation interne autour du dispositif EVREST (intranet,
                      sensibilisation en secteur)
                    </li>
                    <li>Production de documents</li>
                    <li>Indicateurs de suivi</li>
                  </ul>

                  <strong>GROUPE AMIANTE</strong>
                  <ul className="card__list">
                    <li>
                      Aide et exploitation d’un questionnaire sur l’exposition
                      des salariés ayant été exposés à l’amiante
                    </li>
                  </ul>

                  <strong>PROJET DRIVES</strong>

                  <p>(33 SITES – 27 MÉDECINS DU TRAVAIL CONCERNÉS)</p>
                  <ul className="card__list">
                    <li>
                      Déploiement du projet concernant les DRIVES en hyper et
                      supermarché afin d’élaborer des actions de prévention, en
                      partenariat avec la CARSAT
                    </li>

                    <li>Communication</li>
                    <li>Production de documents</li>
                    <li>
                      Analyse statistiques pour les sites ayant un effectif
                      suffisant
                    </li>
                    <li>Coordination et suivi du projet</li>
                    <li>Analyses globales des résultats</li>
                  </ul>

                  <strong>CONTROLES TECHNIQUES</strong>
                  <ul className="card__list">
                    <li>
                      Exploitation de la base des observations faites dans le
                      cadre du projet contrôles techniques en collaboration avec
                      le service toxicologie
                    </li>
                  </ul>

                  <strong>ETUDES ET ENQUETES dont SUMER et MCP</strong>
                  <ul className="card__list">
                    <li>
                      Animation et accompagnement des équipes autour des
                      dispositifs SUMER et MCP :
                    </li>
                    <li>SUMER : de janvier à juin 2017</li>
                    <li>MCP : quinzaine du 13 au 27 novembre 2017</li>
                  </ul>
                </SimpleCard>
              </div>

              <H2 id="drogues-alcool">
                Apporter des réponses adaptées face aux problématiques de
                consommation de drogues et d'alcool sur le lieu de travail
              </H2>

              <div className="col s12 valign">
                <div className="valign-left">
                  <SimpleCard cardClass="colored">
                    <p>
                      Les consommations et addictions ont un impact réel sur
                      l’état de santé du salarié.
                    </p>
                    <p>
                      Les conduites individuelles sous l’emprise de drogues ou
                      d’alcool représentent un risque à évaluer et à prendre en
                      compte, en particulier sur les postes de sécurité. Cette
                      thématique doit être perçue comme les autres risques et
                      traitée comme telle. Mais aujourd’hui encore, c’est un
                      sujet tabou en entreprise.
                    </p>
                    <p>
                      Depuis la loi du 20 juillet 2011, la prévention des
                      addictions et consommations est une mission de service
                      pour la santé au travail.
                    </p>
                    <p>
                      C’est pourquoi, PÔLE SANTÉ TRAVAIL a initié le Pôle
                      Ressources en ADDictologie (PRADD) qui propose :
                    </p>
                  </SimpleCard>
                </div>
                <div className="valign-right">
                  <SimpleCard cardClass="colored">
                    <p>
                      Les consommations et addictions ont un impact réel sur
                      l’état de santé du salarié.
                    </p>
                    <p>
                      Les conduites individuelles sous l’emprise de drogues ou
                      d’alcool représentent un risque à évaluer et à prendre en
                      compte, en particulier sur les postes de sécurité. Cette
                      thématique doit être perçue comme les autres risques et
                      traitée comme telle. Mais aujourd’hui encore, c’est un
                      sujet tabou en entreprise.
                    </p>
                    <p>
                      Depuis la loi du 20 juillet 2011, la prévention des
                      addictions et consommations est une mission de service
                      pour la santé au travail.
                    </p>
                    <p>
                      C’est pourquoi, PÔLE SANTÉ TRAVAIL a initié le Pôle
                      Ressources en ADDictologie (PRADD) qui propose :
                    </p>
                  </SimpleCard>
                </div>
              </div>

              <div className="col s12 m12">
                <SimpleCard cardClass="colored">
                  <p>
                    Les consommations et addictions ont un impact réel sur
                    l’état de santé du salarié.
                  </p>
                  <p>
                    Les conduites individuelles sous l’emprise de drogues ou
                    d’alcool représentent un risque à évaluer et à prendre en
                    compte, en particulier sur les postes de sécurité. Cette
                    thématique doit être perçue comme les autres risques et
                    traitée comme telle. Mais aujourd’hui encore, c’est un sujet
                    tabou en entreprise.
                  </p>
                  <p>
                    Depuis la loi du 20 juillet 2011, la prévention des
                    addictions et consommations est une mission de service pour
                    la santé au travail.
                  </p>
                  <p>
                    C’est pourquoi, PÔLE SANTÉ TRAVAIL a initié le Pôle
                    Ressources en ADDictologie (PRADD) qui propose :
                  </p>
                </SimpleCard>
              </div>

              <div className="col s12 m12">
                <SimpleCard cardClass="white">
                  <p>Pour les salariés des :</p>
                  <ul className="card__list">
                    <li>
                      Entretiens d’accompagnement (bilans – orientations –
                      réinsertion)
                    </li>
                    <li>
                      Consultations spécifiques sur prescription du médecin du
                      travail
                    </li>
                    <li>
                      Accompagnement : Évaluation des risques et mise en oeuvre
                      des plans d’actions de prévention avec l’entreprise (> 6
                      jours)
                    </li>
                  </ul>
                  <p>Pour les entreprises des :</p>
                  <ul className="card__list">
                    <li>Actions type « forum »</li>
                    <li>
                      interventions d’accompagnement au sein de l’entreprise
                      avec un Intervenant en Prévention des Risques
                      Professionnels
                    </li>
                  </ul>
                </SimpleCard>
              </div>

              <div className="col s12 valign">
                <div className="valign-left">
                  <SimpleCard cardClass="colored">
                    <p>
                      Le PRADD est un outil d’aide pour les équipes santé
                      travail. C’est le médecin du travail qui doit initier avec
                      son équipe la question de la prévention autour de ce
                      thème. Plusieurs outils ont été conçus par le PRADD en
                      lien avec le service communication comme l’organisation
                      d’un pot d’entreprise, quelques conseils, fiche constat,
                      powerpoint de sensibilisation. Un module d’e-learning a
                      également été développé.
                    </p>
                  </SimpleCard>
                </div>

                <div className="valign-right">
                  <StatCard icone="local_bar" cardClass="white">
                    <strong>80</strong>
                    <span>Consultations</span>
                    <strong>173</strong>
                    <span>Entretiens réalisés</span>
                    <strong>46</strong>
                    <span>Salariés suivis</span>
                    <strong>36</strong>
                    <span>Entreprises accompagnées</span>
                  </StatCard>
                </div>
              </div>

              <H2 id="maintien-emploi">
                Accompagner les entreprises et les salariés dans la recherche de
                solutions pour le maintien dans l'emploi
              </H2>

              <div className="col s12">
                <Build />
              </div>

              <H2 id="formation-des-salaries">
                La formation des salariés sur la santé au travail
              </H2>

              <div className="col s12 valign">
                <div className="valign-left">
                  <SimpleCard cardClass="colored">
                    <p>
                      Organisme de formation créé en 1997 par les services de
                      santé au travail de la métropole lilloise, PST formation a
                      pour objectif de répondre aux attentes des entreprises en
                      matière de formation de leurs personnels et d’actualiser
                      son offre en continu pour coller aux réalités du terrain
                      et aux besoins émergents.
                    </p>

                    <p>
                      La force de PST formation réside dans sa connaissance du
                      monde de l’entreprise et dans ses liens privilégiés avec
                      la santé au travail, des atouts indéniables pour proposer
                      une offre de formation adaptée et professionnelle.
                    </p>
                  </SimpleCard>
                </div>
                <div className="valign-right">
                  <SimpleCard cardClass="colored">
                    <strong>
                      UNE OFFRE DE SERVICE COMPLÈTE EN SANTÉ ET SÉCURITÉ AU
                      TRAVAIL
                    </strong>
                    <p>
                      L’offre de service de PST Formation couvre les différents
                      champs de la santé et de la sécurité au travail :
                      prévention mal de dos et des TMS, de l’incendie, des
                      addictions, des risques à domicile, formations des
                      Sauveteurs Secouristes du Travail, des formateurs SST, des
                      membres CHSCT ... à travers 8 thématiques et pas loin de
                      30 formations, PST Formation accompagne les entreprises
                      dans une politique globale de prévention des risques.
                    </p>
                  </SimpleCard>
                </div>
              </div>

              <div className="col s12">
                <SimpleCard cardClass="white">
                  <strong>
                    UNE OFFRE DE SERVICE COMPLÈTE EN SANTÉ ET SÉCURITÉ AU
                    TRAVAIL
                  </strong>
                  <p>
                    L’offre de service de PST Formation couvre les différents
                    champs de la santé et de la sécurité au travail : prévention
                    mal de dos et des TMS, de l’incendie, des addictions, des
                    risques à domicile, formations des Sauveteurs Secouristes du
                    Travail, des formateurs SST, des membres CHSCT ... à travers
                    8 thématiques et pas loin de 30 formations, PST Formation
                    accompagne les entreprises dans une politique globale de
                    prévention des risques.
                  </p>

                  <div className="pst">
                    <Link href="http://www.pstformation.com/">
                      <a target="_blank">
                        <img
                          className="responsive-img photo logo-pst"
                          src="static/images/ecouter-et-accompagner/logo-pst.jpg"
                          title="En savoir plus sur PST Formation"
                        />
                      </a>
                    </Link>
                  </div>
                </SimpleCard>
              </div>

              <div className="col s12 m8 offset-m2">
                <StatCard cardClass="colored">
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>3 564</strong>
                    <span>SALARIÉS FORMES</span>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <strong>60</strong>
                    <span>
                      SALARIÉS SUIVIS POTENTIELLEMENT PAR UN PSYCHOLOGUE DU
                      TRAVAIL
                    </span>
                  </ScrollAnimation>
                </StatCard>
              </div>

              <div className="chart-container">
                <H3>Type de formation réalisées</H3>
                <ResponsivePie
                  data={this.state.data["typesFormation"]}
                  margin={{
                    top: 55,
                    right: 135,
                    bottom: 79,
                    left: 111
                  }}
                  innerRadius={0.55}
                  colors="nivo"
                  colorBy="id"
                  borderColor="inherit:darker(0.6)"
                  radialLabelsSkipAngle={0}
                  radialLabelsTextXOffset={8}
                  radialLabelsTextColor="#333333"
                  radialLabelsLinkOffset={3}
                  radialLabelsLinkDiagonalLength={26}
                  radialLabelsLinkHorizontalLength={36}
                  radialLabelsLinkStrokeWidth={1}
                  radialLabelsLinkColor="inherit"
                  slicesLabelsSkipAngle={0}
                  slicesLabelsTextColor="#333333"
                  animate={false}
                  motionStiffness={110}
                  motionDamping={16}
                  legends={[
                    {
                      anchor: "bottom",
                      direction: "row",
                      translateY: 56,
                      itemWidth: 100,
                      itemHeight: 14,
                      symbolSize: 14,
                      symbolShape: "circle"
                    }
                  ]}
                />
              </div>

              <div className="col s12 m6 offset-m7">
                <a
                  href="/mener-des-actions"
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
          .amt {
            display: inline-block;
            padding: 1rem 0;
            font-size: 1.5rem;
          }
          @media only screen and (min-width: 992px) {
            .ergo__intro {
              height: 25rem;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: justify;
            }
          }
          .risques-chimiques {
            min-height: 30rem;
          }
          .toxilist {
            text-align: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .evrest {
            text-align: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .pst {
            text-align: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .build {
            height: 20vh !important;
          }

          .intro__discover {
            background-color: ${brandColors.green};
          }
        `}</style>
      </Layout>
    );
  }
}

export default EcouterEtAccompagner;
