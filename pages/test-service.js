import Services from "../services";

import Layout from "../components/Layout";

class TestService extends React.Component {
  async componentWillMount() {
    console.dir(theme);
  }

  render() {
    return (
      <Layout>
        <div className="row" />
      </Layout>
    );
  }
}

export default TestService;
