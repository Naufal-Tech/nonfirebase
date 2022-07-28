import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import NavigationBar from '../components/Navbar'
import '../styles/Profile.css'

function Profile () {
    const { username } = useParams()
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const url = `${apiUrl}/user/${username}`
    const [user, setUser] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setUser(response.data.data)
                console.log(response.data)
            })
    }, [url])

    if(user){
        content =
        <Fragment>
            <div className="profile-bg">
                <div className="container">
                    <br/>
                    <br/>
                    <div className="text-center">
                        <img className="img" src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg" alt={user.name} width="150" height="150"/>
                    </div>
                    <br/>
                    <h3 className="text-center">@{user.username}</h3>
                    <br/>
                    <br/>
                    <h4 className="text-center">{user.first_name} {user.last_name}</h4>
                    <br/>
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-2"><strong>USER ID:</strong></div>
                            <div className="col-10">{user.id}</div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-2"><strong>EMAIL:</strong></div>
                            <div className="col-10">{user.email}</div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-2"><strong>BIODATA:</strong></div>
                            <div className="col-10">{user.bio}</div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <h2 className="text-center">TOTAL SCORE:</h2>
                    <h1 className="text-center"><strong>{user.total_score}</strong></h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#082032" fill-opacity="1" d="M0,96L360,32L720,128L1080,32L1440,224L1440,320L1080,320L720,320L360,320L0,320Z"></path></svg>
            </div>
      </Fragment>
    }
    
    else {
        content =
        <Fragment>
            <div className="noprofile-bg">
                <div className="container">
                    <div className="text-center">
                        <br/>
                        <br/>
                        <img className="img" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/cross-sign-3701844-3084632.png" width="150" height="150"/>
                        <br/>
                        <br/>
                        <h1><strong>{username}</strong>not exist!</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    }

    return (
        <div>
            <NavigationBar/>
            {content}
        </div>
    )
}

export default Profile
