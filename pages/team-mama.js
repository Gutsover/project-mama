import Link from "next/link";
import Layout from "../components/Layout";
import H1 from "../components/H1";

import ScrollAnimation from "react-animate-on-scroll";

export default () => (
  <Layout>
    <div className="container">
      <H1>Team-Mama</H1>
      <div className="row">
        <div className="col s12 m6">
          <ScrollAnimation animateIn="bounceInLeft">
            <div className="card">
              <div className="card-image">
                <img src="static/images/team-mama/thomas.jpg" />
                <div className="card-content">
                  <p>
                    <a class="waves-effect waves-light btn">
                      contact@thomasringot.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="col s12 m6">
          <ScrollAnimation animateIn="bounceInDown">
            <div className="card">
              <div className="card-image">
                <img src="static/images/team-mama/mylene.jpg" />
                <div className="card-content">
                  <p>
                    <a class="waves-effect waves-light btn">
                      mylenevandaele@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="col s12 m6">
          <ScrollAnimation animateIn="bounceInUp">
            <div className="card">
              <div className="card-image">
                <img src="static/images/team-mama/karine.jpg" />
                <div className="card-content">
                  <p>
                    <a class="waves-effect waves-light btn">
                      karine.wloch@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="col s12 m6">
          <ScrollAnimation animateIn="bounceInRight">
            <div className="card">
              <div className="card-image">
                <img src="static/images/team-mama/simon.jpg" />
                <div className="card-content">
                  <p>
                    <a class="waves-effect waves-light btn">
                      simon.tesniere@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>

    <style jsx>{`
      img {
        max-width: 100px;
        height: auto;
        margin: auto;
      }

      .card {
        height: 250px;
        padding: 1rem;
      }
    `}</style>
  </Layout>
);
