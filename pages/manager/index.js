import firebase from "firebase/app";
import auth from "firebase/auth";

import Layout from "../../components/Layout";
import H1 from "../../components/H1";
import ConnectionForm from "./ConnectionForm";
import PanelAdmin from "./PanelAdmin";
import Loader from "../../components/Loader";

import config from "../../constantes/firebase-config";
import { brandColors } from "../../constantes/colors";

// TODO: proper session management
class Manager extends React.Component {
  state = {
    isConnected: false,
    email: "team.mamawf3@gmail.com",
    isConnected: true,
    // email: "sguilbert@polesantetravail.fr",
    error: false
  };

  async componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    e.persist();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({
          isConnected: true,
          email: user.email,
          error: false
        });

        M.toast({ html: "Bonjour !" });
      })
      .catch(error => {
        // message erreur
        this.setState({
          error: true
        });
      });
  };

  onDisconnect = e => {
    this.setState({
      isConnected: false,
      email: ""
    });

    M.toast({ html: "Bye!" });
  };

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <H1>MANAGER</H1>
            {this.state.isConnected ? (
              <PanelAdmin
                email={this.state.email}
                onDisconnect={this.onDisconnect}
              />
            ) : (
              <ConnectionForm
                error={this.state.error}
                onSubmit={this.handleSubmit}
              />
            )}
          </div>
        </div>

        <style jsx global>{`
          .toast {
            background-color: ${brandColors.actual} !important;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Manager;
