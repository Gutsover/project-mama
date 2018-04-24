import Link from "next/link";

import CategoryLink from "./CategoryLink";
import SubCategory from "./SubCategory";

import { brandColors } from "../../../constantes/colors";

class Sidenav extends React.Component {
  componentDidMount() {
    // Dès que le composant est initialisé on initialise aussi le js de materialize
    // Afin que la sidebar et les sous-menu fonctionnent correctement
    const $sidenav = document.querySelector(".sidenav");
    M.Sidenav.init($sidenav, {
      preventScrolling: false
    });

    const $subCategories = document.querySelectorAll(".collapsible");
    M.Collapsible.init($subCategories);
  }

  render() {
    const { categoryLinks } = this.props;

    return (
      <React.Fragment>
        <ul id="slide-out" className="sidenav sidenav-fixed z-depth-1">
          <Link href="/">
            <a className="logo-container">
              <img
                title="Revenir à l'accueil"
                className="logo"
                src="static/images/logo.jpg"
              />
            </a>
          </Link>

          {/* On affiche tout les liens, array = sous-menu, sinon lien normal */}
          {categoryLinks.map(
            categoryLink =>
              Array.isArray(categoryLink) ? (
                <SubCategory
                  title={categoryLink[0]} // textContent de la catégorie
                  href={categoryLink[1]} // href
                  key={categoryLink[0]} // Nécessaire a react pour gérer le virtual dom
                  subCategoryLinks={categoryLink.slice(2)} // Les liens
                />
              ) : (
                <CategoryLink
                  textContent={categoryLink.textContent}
                  href={categoryLink.href}
                  key={categoryLink.textContent}
                />
              )
          )}
        </ul>

        {/* icon pour toggle la sideNav */}
        <a
          href="#"
          data-target="slide-out"
          className="btn-floating btn-large waves-effect waves-light sidenav-trigger"
        >
          <i className="medium material-icons">menu</i>
        </a>

        <style jsx>{`
          .logo-container {
            align-items: center;
            background-color: white;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            height: 13.33rem;
            justify-content: center;
            margin: 2rem auto;
            width: 13.33rem;
          }

          .sidenav {
            background: ${brandColors.actual};
            transition: background-color 1s ease-out;
          }

          ::-webkit-scrollbar {
            width: 0.5rem;
          }

          ::-webkit-scrollbar-track {
            -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
            border-radius: 2px;
            background: ${brandColors.actual};
          }

          ::-webkit-scrollbar-thumb {
            border-radius: 2px;
            background: white;
          }

          .sidenav-trigger {
            z-index: 9;
            position: fixed;
          }

          @media only screen and (max-width: 992px) {
            .sidenav-trigger {
              bottom: 1rem;
              right: 1rem;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: ${brandColors.actual};
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Sidenav;
