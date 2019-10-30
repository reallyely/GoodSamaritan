import React, { Component } from "react";
import { Flex } from "reflexbox";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import { getInfo } from "./api/getFacebook";
import Posts from "./containers/Posts";
import Events from "./containers/Events";
import Header from "./components/Header";

import banner from "./images/banner2.jpg";

const style = {
  backgroundImage: `url(${banner})`,
  backgroundPosition: "flex-start",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  width: "100%"
};

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Flex column justifyContent="	">
          <Flex column>
            <Route exact path="/" component={Home} />
            <Route path="/privacy" component={Privacy} />
          </Flex>
        </Flex>
      </HashRouter>
    );
  }
}
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: [],
      loading: true,
      location: {},
      phone: ""
    };
  }

  componentWillMount() {
    getInfo().then(({ data: { location, phone } }) =>
      this.setState({ location, phone })
    );
  }

  render() {
    return (
      <Flex column align="center" className="App" style={style}>
        <Header
          className="container"
          location={this.state.location}
          phone={this.state.phone}
        />
        <Flex
          className="container body"
          justify="center"
          align="center"
          m={2}
          column
        >
          <Events></Events>
          <Posts></Posts>
        </Flex>
      </Flex>
    );
  }
}

const Privacy = () => (
  <Flex column align="center container body" alignContent="center">
    <iframe
      style={{ width: "98%", height: "600px", border: "none" }}
      title="privacy-policy"
      src="https://app.termly.io/document/privacy-policy/a0c24d92-67e2-4e1b-859e-3f2c6637f973"
    ></iframe>
  </Flex>
);

export default App;
