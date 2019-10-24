import React from "react";
import Head from "next/head";
import { randomInteger } from "../core";
import "../node_modules/@clr/ui/clr-ui.min.css";

class Home extends React.Component {
  state = {
    from: 0,
    to: 10,
    output: null
  };

  handleSubmit = e => {
    e.preventDefault();

    const { from, to } = this.state;
    this.setState({ output: randomInteger(from, to) });
  };

  handleFrom = e => {
    e.preventDefault();
    this.setState({ from: e.target.value });
  };

  handleTo = e => {
    e.preventDefault();
    this.setState({ to: e.target.value });
  };

  render() {
    const { from, to, output } = this.state;

    return (
      <main>
        <Head>
          <title>Random</title>
        </Head>
        <div className="card">
          <div className="card-block">
            <form onSubmit={this.handleSubmit}>
              <input
                type="number"
                onChange={this.handleFrom}
                value={from}
                className="clr-input"
              />
              <input
                type="number"
                onChange={this.handleTo}
                value={to}
                className="clr-input"
              />
              <button>Рандомь!</button>
              <output>{output}</output>
            </form>
          </div>
        </div>
        <style jsx>{`
          main {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: max-content;
            margin: 0 auto;
          }
          form {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
          }
        `}</style>
      </main>
    );
  }
}

export default Home;
