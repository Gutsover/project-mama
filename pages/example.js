import Layout from "../components/Layout";

import ImageCard from "../components/ImageCard";

export default () => (
  <Layout>
    {/* row obligatoire, vous pouvez en ajouter d'autre ensuite si besoin */}
    <div className="row">
      {/* ensuite a vous de choisir ce que vous mettez, pas obligé un col 12 */}
      <div className="col s12">
        {/* ici le contenu */}
        <h1 className="main-title">Ceci est un titre</h1>

        <ImageCard imageSrc="static/images/events/4.png" title="prout">
          <p>Coucou</p>
        </ImageCard>
      </div>
    </div>

    {/* ici le style, class obligatoire, n'utilisez pas celles de materialize, ajoutez la votre */}
    {/* Utiliser <style jsx global> si vous avez besoin de modifier du css qui n'est pas dans la page */}
    <style jsx>
      {`
        .special-card {
          color: red;
        }
      `}
    </style>
  </Layout>
);
