import Link from "next/link";

import { brandColors } from "../../../constantes/colors";

const PanelAdmin = ({ email, onDisconnect }) => (
  <div className="col s12 m8 offset-m2 panel-admin">
    <div className="card-panel animated fadeIn">
      <ul>
        <li>
          <Link href="">
            <a
              className="waves-effect waves-light btn"
              href="mailto:team.mamawf3@gmail.com"
            >
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className="waves-effect waves-light btn">Google Analytics</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className="waves-effect waves-light btn">Résultats du sondage</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className="waves-effect waves-light btn">Thème</a>
          </Link>
        </li>
      </ul>
      <div className="chip close">
        {/* <img src="images/yuna.jpg" alt="Contact Person" /> */}
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

      a {
        background-color: ${brandColors.actual} !important;
        min-width: 200px;
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
    `}</style>
  </div>
);

export default PanelAdmin;
