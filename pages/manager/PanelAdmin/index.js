import Link from "next/link";

import { brandColors } from "../../../constantes/colors";

const PanelAdmin = ({ avatar, email, onDisconnect }) => (
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

export default PanelAdmin;
