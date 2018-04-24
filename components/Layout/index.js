import Head from "next/head";

import Sidenav from "./Sidenav";
import Footer from "../Layout/Footer";

import { categoryLinks } from "../../models/components/Sidenav";

const Layout = ({ children }) => (
  <div className="container-fluid">
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        rel="icon"
        type="image/png"
        href="../../static/images/favicon.ico"
      />

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <link rel="stylesheet" href="static/vendors/materialize.min.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
        integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="static/css/index.css" />
      <title>Pôle Santé Travail: Rapport Annuel d'Activités</title>
    </Head>
    <React.Fragment>
      <Sidenav categoryLinks={categoryLinks} />

      <main id="content">{children}</main>
    </React.Fragment>

    <Footer />

    <script src="static/vendors/materialize.min.js" />
    <script src="https://squaresend.com/squaresend.js" />
    <style jsx>{``}</style>
  </div>
);

export default Layout;
