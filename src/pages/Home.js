import React,{Fragment} from 'react'
import '../pages/Home.css'
import NavigationBar from '../components/Navbar'

function Home() {
    
    return (
        <Fragment>
            <NavigationBar />
        <div>
            <div className='content'>
                <div className='intro'>
                    <h1>Hello, {localStorage.getItem('username')}</h1>
                    <p>Welcome to the mini game!</p>
                    <p>Lets Play!</p>
                    <a href='/listgames' className='btn-play-game'>Play Game</a>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Home
