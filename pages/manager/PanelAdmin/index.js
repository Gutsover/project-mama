import Link from "next/link";
import Router from "next/router";

import Services from "../../../services";

import { brandColors } from "../../../constantes/colors";

class PanelAdmin extends React.Component {
  state = {
    color: ""
  };

  setColor = e => {
    this.setState({ color: e.target.value });

    brandColors.actual = this.state.color;

    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      Services.theme.setTheme(this.state.color);
      Router.push("/manager");
    }, 200);
  };

  render() {
    const { avatar, email, onDisconnect } = this.props;
    return (
      <div className="col s12 m8 offset-m2 panel-admin">
        <div className="card-panel animated fadeIn">
          <ul>
            <li>
              <Link href="">
                <a
                  className="waves-effect waves-light btn"
                  href="mailto:team.mamawf3@gmail.com"
                >
                  <i className="material-icons">email</i>
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="waves-effect waves-light btn">
                  <i className="material-icons">trending_up</i>
                  Google Analytics
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="waves-effect waves-light btn">
                  <i className="material-icons">insert_chart</i>
                  Sondage
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="waves-effect waves-light btn">
                  <i className="material-icons">mode_edit</i>
                  Données
                </a>
              </Link>
            </li>
            <li>
              <div className="color-container">
                <input
                  onChange={this.setColor}
                  onBlur={this.refreshPage}
                  type="color"
                  name="color"
                  id="color"
                />
                <label htmlFor="color">Couleur</label>
              </div>
            </li>
          </ul>
          <div className="chip close">
            <img src={avatar} alt="Contact Person" />
            {email}
            <i onClick={onDisconnect} className="close material-icons">
              close
            </i>
          </div>
        </div>
        <style jsx>{`
          .panel-admin {
            height: 100vh;
          }

          .card-panel {
            padding-bottom: 4rem;
            position: relative;
          }

          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
          }

          li {
            flex-basis: 50%;
            text-align: center;
            margin-bottom: 1rem;
          }

          a:nth-of-type(odd) {
            margin-right: 2rem;
          }

          @media only screen and (max-width: 400px) {
            a {
              margin-right: 0 !important;
            }
          }

          .color-container {
            background-color: ${brandColors.actual};
            min-width: 200px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-right: 2rem;
          }

          .color-container label {
            color: white !important;
            font-size: 20px;
            font-variant: small-caps;
          }

          a {
            background-color: ${brandColors.actual} !important;
            min-width: 200px;
            position: relative;
            display: flex;
          }

          a:hover,
          a:active,
          a:focus {
            background-color: ${brandColors.actualHover} !important;
          }

          .chip {
            position: absolute;
            left: 1rem;
            bottom: 1rem;
          }

          i {
            margin-right: auto;
          }
        `}</style>
      </div>
    );
  }
}

export default PanelAdmin;
