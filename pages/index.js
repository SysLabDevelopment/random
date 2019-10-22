import React from "react";
import Head from "next/head";
import { randomInteger } from "../core";

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
      <div>
        <Head>
          <title>Random</title>
        </Head>

        <form onSubmit={this.handleSubmit}>
          <input type="number" onChange={this.handleFrom} value={from} />
          <input type="number" onChange={this.handleTo} value={to} />
          <button>Рандомь!</button>
          <output>{output}</output>
        </form>

        <style jsx>{``}</style>
      </div>
    );
  }
}

export default Home;
