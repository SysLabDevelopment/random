import React from 'react';
import Head from 'next/head';
import { randomInteger } from '../core';
import '../node_modules/@clr/ui/clr-ui.min.css';

class Home extends React.Component {
    state = {
        from: 1,
        to: 10,
        output: '*',
    };

    handleSubmit = e => {
        e.preventDefault();

        const { from, to } = this.state;
        this.setState({ output: randomInteger(parseInt(from), parseInt(to)) });
    };

    handleFrom = e => {
        e.preventDefault();
        this.setState({ from: e.target.value });
    };

    handleTo = e => {
        e.preventDefault();
        this.setState({ to: e.target.value });
    };

    selectText = e => {
        e.preventDefault();
        e.target.select();
    };

    render() {
        const { from, to, output } = this.state;

        return (
            <main>
                <Head>
                    <title>Random</title>
                </Head>
                <div className='card'>
                    <div className='card-block'>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type='number'
                                className='clr-input'
                                value={from}
                                onChange={this.handleFrom}
                                onFocus={this.selectText}
                            />
                            <input
                                type='number'
                                className='clr-input'
                                value={to}
                                onChange={this.handleTo}
                                onFocus={this.selectText}
                                autoFocus
                                list='defaultNumbers'
                            />
                            <datalist id='defaultNumbers'>
                                <option value='2' />
                                <option value='10' />
                            </datalist>
                            <button className='btn btn-primary btn-block'>Рандомь!</button>
                            <output className='label label-success'>{output}</output>
                        </form>
                    </div>
                </div>
                <style global jsx>{`
                    :root {
                        font-size: 48px;
                    }
                `}</style>
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
                        height: calc(100vh - 24px * 6);
                    }
                    .card {
                        margin: 0;
                    }
                    button {
                        margin: 0 !important;
                    }
                    @media (max-width: 320px) {
                        main {
                            width: auto !important;
                        }
                        form > input {
                            max-width: 100% !important;
                        }
                    }
                `}</style>
            </main>
        );
    }
}

export default Home;
