// Logic Game Class

class Game {
  constructor() {
    this.user_score = 0;
    this.computer_score = 0;
  }

  // Random Logic Script 
  randomize() {
    // Pilihan Com Disimpan dalam array
    const choices = ["rock", "paper", "scissor"];

    // Acak Random Lalu dibulatkan ke bawah pakai Math Random
    // Sehingga, hasil akhir hanya berupa angka 0, 1, atau 2 untuk akses ketiga array yang bulat
    const index = Math.floor(Math.random() * 2.9);

    // Array choice featuring math random
    return choices[index];
  }

  playGame(playerChoice) {
    // Reset Background
    this.resetBackground();

    // Cetak Player Choice dan atur background di pilihan player tersebut
    console.log(`Player memilih ${playerChoice}`);
    this.setBackground('player', playerChoice);

    // Cetak Computer Choice dan atur background di pilihan Com tersebut
    const comChoice = this.randomize();
    console.log(`COM memilih ${comChoice}`);
    this.setBackground('com', comChoice);

    // Verifikasi pilihan computer & player
    // Jika sama, panggil fungsi resultDraw()
    // Jika player menang, panggil fungsi resultPlayerWin()
    // Jika player kalah, panggil fungsi resultPlayerLose()
    if (playerChoice == comChoice) {
      return this.resultDraw();
    }

    if (playerChoice === "rock" && comChoice === "paper") {
      return this.resultPlayerLose();
    }

    if (playerChoice === "rock" && comChoice === "scissor") {
      return this.resultPlayerWin();
    }

    if (playerChoice === "paper" && comChoice === "scissor") {
      return this.resultPlayerLose();
    }

    if (playerChoice === "paper" && comChoice === "rock") {
      return this.resultPlayerWin();
    }

    if (playerChoice === "scissor" && comChoice === "rock") {
      return this.resultPlayerLose();
    }

    if (playerChoice === "scissor" && comChoice === "paper") {
      return this.resultPlayerWin();
    }
  }

  setBackground(playerType, choice) {
    const selectedElement = document.getElementById(`${playerType}-${choice}`);

    // Kelas style.css dipanggil untuk background
    selectedElement.classList.add("custom-selected");
  }

  resetBackground() {
    // Reset background pilihan player & computer
    document.getElementById("player-rock").classList.remove("custom-selected");
    document.getElementById("player-paper").classList.remove("custom-selected");
    document.getElementById("player-scissor").classList.remove("custom-selected");
    document.getElementById("com-rock").classList.remove("custom-selected");
    document.getElementById("com-paper").classList.remove("custom-selected");
    document.getElementById("com-scissor").classList.remove("custom-selected");

    // Reset style background pada tulisan VS
    document.getElementById("vs").classList.remove("custom-green-vs-box");
    document.getElementById("vs").classList.remove("custom-green-darker-vs-box");

    // Return default state (VS), inisiasi ulang bermain game
    document.getElementById("vs").innerHTML = "VS";
    document.getElementById("vs").classList.add("custom-vs-text");
  }

  // DRAW
  resultDraw() {
    // Cetak Draw tulisan ke console
    console.log("DRAW");

    // Ambil element & ubah tulisannya
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "DRAW";

    // Reset atau restart kelas custom-vs-text (custom-green-darker-vs-box di style.css)
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-green-darker-vs-box");
  }

  resultPlayerLose() {
    // Cetak tulisan WIN ke console
    console.log("COM WIN");

    // Ambil element VS dan COM WIN
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "COM WIN";

    this.computer_score++;

    const comScore = document.getElementById("computer-score");
    comScore.innerHTML = this.computer_score;

    // Reset atau restart kelas custom-vs-text (custom-green-vs-box di style.css)
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-green-vs-box");
  }

  fetchUpdateScore(){
    fetch('http://localhost:3000/api/score', {
      method: 'put', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('accessToken')
      },
      body: JSON.stringify({
        gameId:'1',
        score:'1'
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  // RESULT PLAYER WIN
  resultPlayerWin() {
    // Cetak tulisan ke console
    this.fetchUpdateScore();
    
    console.log("PLAYER WIN");

    // Ambil element & ubah tulisannya
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "PLAYER 1 WIN";

    // let userScore = 0;
    // let uScore = document.getElementById("user-score");
    // uScore.innerHTML = userScore += 1;

    this.user_score++;

    const userScore = document.getElementById("user-score");
    userScore.innerHTML = this.user_score;

    console.log("user score: " + this.user_score)

 // Reset atau restart kelas custom-vs-text (custom-green-green-vs-box di style.css)
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-green-vs-box");
  }
}



// Membuat object baru menggunakan kelas Game (RESET TO NEW GAME)
const game = new Game();

// Menyimpan semua elemen yang dibutuhkan ke dalam variable
const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissor = document.getElementById("player-scissor");

const comRock = document.getElementById("com-rock");
const comPaper = document.getElementById("com-paper");
const comScissor = document.getElementById("com-scissor");

const versus = document.getElementById("vs");

const reset = document.getElementById("reset");



// Menambahkan fungsi on-click yang dijalankan ketika element di-klik
// isi dari namaElement.onclick harus berupa function
playerRock.onclick = function () {
  game.playGame("rock");
}

playerPaper.onclick = function () {
  game.playGame("paper");
}

playerScissor.onclick = function () {
  game.playGame("scissor");
}

// Onlick Reset dan Cetak Reset di Console
reset.onclick = function () {
  console.log("--- GAME RESET ---");
  game.resetBackground();
}
