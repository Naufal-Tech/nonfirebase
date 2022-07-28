import React, { Fragment, useState, useEffect, Component } from 'react'

import { useParams } from 'react-router-dom'
import NavigationBar from '../components/Navbar'

import style from '../styles/DetailGame.module.css'

class Detail extends Component {

    state = {
        game: {},
        leaderboard: []
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const apiUrl = process.env.REACT_APP_API_BASE_URL;
        fetch(`${apiUrl}/game/${id}`)
            .then(response => response.json())
            .then(result => {
                this.setState({ game: result.data })
                fetch(`${apiUrl}/game/${id}/leaderboard`)
                    .then(response => response.json())
                    .then(result => {
                        this.setState({ leaderboard: result.data })
                        console.log(result.data)
                    });
            });
    }

    renderTableData() {

        return this.state.leaderboard.map((e, index) => {
            return (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{e.detail_user.username}</td>
                    <td>{e.detail_user.first_name}</td>
                    <td>{e.score}</td>
                </tr>
            )
        })
    }

    render() {
        const { game } = this.state;


        return (
            <Fragment>
                <NavigationBar />
                <section id={style["judul"]}>
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                            <div class="col-11 d-flex flex-column justify-content-center">
                                <h1 class="text-center text-uppercase mt-5" style={{ color: "white" }}> SELAMAT DATANG DI GAME <br></br><p style={{ fontSize: "70px" }}>{game.name}</p> </h1>

                                <a href="/game" class="btn  mt-5"
                                    style={{ color: "white", backgroundColor: "#0a1f30", marginLeft: "auto", marginRight: "auto" }}>MAIN
                                    SEKARANG</a>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="waves">

                    <svg style={{ backgroundColor: "#7f909d" }} xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320">
                        <path fill="#334756" fill-opacity="1"
                            d="M0,160L360,224L720,224L1080,288L1440,224L1440,0L1080,0L720,0L360,0L0,0Z"></path>
                    </svg>
                </div>
                <section id={style["list-game"]}>
                    <div class="container">
                        <div class="row d-flex flex-column justify-content-start align-items-center" style={{ height: "50vh" }}>
                            <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
                                <h1 class="text-center text-uppercase" style={{ color: "white" }}>JADILAH JUARA DI GAME INI</h1>

                            </div>
                            <div class="col-md-6 mt-5">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Rangking</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderTableData()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </section>


            </Fragment>
        );
    }
}

export default Detail;

