import Layout from "../components/Layout";
import Build from "../components/Build";

export default () => (
  <Layout>
    <div className="container">
      <div className="row">
        {/* <H1>La cartographie des entreprises adhérentes</H1>

        <H2 id="territoire-contraste">Un territoire contrasté</H2>

        <div className="col s12">
          <p>blabla</p>
        </div>

        <H2 id="profil-entreprises">Le profil des entreprises</H2>

        <H3>Répartition des adhérents par taille</H3>

        <div className="col s12">
          <p>blabla</p>
        </div>

        <H2 id="etat-de-sante">L'état de santé des salariés</H2>

        <div className="col s12">
          <p>blabla</p>
        </div> */}
        <Build />
      </div>
    </div>
    <style jsx>{``}</style>
  </Layout>
);
