import React, { Component } from 'react';
import '../pages/style.css'
import '../pages/bootstrap.min.css'
import Logo from '../images/img/logo.png'
import Batu from '../images/img/batu.png'
import Gunting from '../images/img/gunting.png'
import Kertas from '../images/img/kertas.png'
import Refresh from '../images/img/refresh.png'

class Game extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid mt-3">
                    <div className="row align-items-center">
                    <div className="col-1 fs-1 fw-bolder text-end custom-back-button">
                        <a href='/listgames'>&lt;</a>
                    </div>
                    <div className="col-1 text-center">
                        <img src={Logo} className="custom-logo" />
                    </div>

                    <div className="col fs-2 fw-bold custom-game-title">
                        ROCK PAPER SCISSOR
                    </div>
                    </div>
                </div>
                <div className="container text-center custom-game-section">
                    <div className="row my-3 justify-content-center align-items-center">
                    <div className="col-2 fs-4 fw-bold custom-game-player-name">
                        PLAYER1<p>Score: <span id="user-score">0</span></p>
                    </div>
                    <div className="col-2">
                    </div>
                    <div className="col-2 fs-4 fw-bold custom-game-player-name">
                        COM<p>Score: <span id="computer-score">0</span></p>
                    </div>
                    </div>
                    <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-2 custom-choice-background align-items-center" id="player-rock">
                        <img className="custom-choice" src={Batu} />
                    </div>
                    <div className="col-2">
                    </div>
                    <div className="col-2 custom-choice-background" id="com-rock">
                        <img className="custom-choice" src={Batu} />
                    </div>
                    </div>
                    <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-2 custom-choice-background" id="player-paper">
                        <img className="custom-choice" src={Kertas} />
                    </div>
                    <div className="col-2 mx-2 fw-bold custom-vs-background custom-vs-text" id="vs">
                        VS
                    </div>
                    <div className="col-2 custom-choice-background" id="com-paper">
                        <img className="custom-choice" src={Kertas} />
                    </div>
                    </div>
                    <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-2 custom-choice-background" id="player-scissor">
                        <img className="custom-choice" src={Gunting} />
                    </div>
                    <div className="col-2">
                    </div>
                    <div className="col-2 custom-choice-background" id="com-scissor">
                        <img className="custom-choice" src={Gunting} />
                    </div>
                    </div>
                    <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-2">
                    </div>
                    <div className="col-2" id="reset">
                        <img className="custom-choice" src={Refresh} />
                    </div>
                    <div className="col-2">
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Game
