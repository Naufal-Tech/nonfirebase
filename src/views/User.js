import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import '../User.css';
import EditModal from '../components/EditModal';
import Button from '../components/Button';

const baseUrl = process.env.REACT_APP_API_BASE_URL;


const User = () => {
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const [editData, setEditData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    bio: '',
    location: '',
    social_media_url: '',
  });

  const update = async () => {
    try {
      const {
        id,
        first_name,
        last_name,
        email,
        username,
        password,
        bio,
        location,
        social_media_url,
      } = editData;
      const newData = {
        id,
        first_name,
        last_name,
        email,
        username,
        password,
        bio,
        location,
        social_media_url,
      };
      const token = localStorage.getItem('accessToken');

      const res = await axios.put(`${baseUrl}/user/${id}`, newData, {
        headers: {
          authorization: token,
        },
      });

      setUsers(
        users.map((user) => {
          return user.id === id ? { ...res.data.data } : user;
        })
      );
      setIsEdit(false);
      setEditData({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        bio: '',
        location: '',
        social_media_url: '',
      });
    } catch (err) {
      setIsError(true);
      setError(err.response.data);
      setEditData({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        bio: '',
        location: '',
        social_media_url: '',
      });
      // setFirstName('');
      // setLastName('');
      // setEmail('');
      // setUsername('');
      // setPassword('');
      // setBio('');
      // setLocation('');
      // setSocialMedia('');
      setTimeout(() => {
        setIsError(false);
        setError('');
      }, 3000);

      console.log(err);
      // console.log(err.response.data.message);
    }
  };

  const setFirstName = (e) => {
    setEditData({
      ...editData,
      first_name: e.target.value,
    });
  };

  const setLastName = (e) => {
    setEditData({
      ...editData,
      last_name: e.target.value,
    });
  };

  const setEmail = (e) => {
    setEditData({
      ...editData,
      email: e.target.value,
    });
  };

  const setUsername = (e) => {
    setEditData({
      ...editData,
      username: e.target.value,
    });
  };

  const setPassword = (e) => {
    setEditData({
      ...editData,
      password: e.target.value,
    });
  };

  const setBio = (e) => {
    setEditData({
      ...editData,
      bio: e.target.value,
    });
  };

  const setLocation = (e) => {
    setEditData({
      ...editData,
      location: e.target.value,
    });
  };

  const setSocialMedia = (e) => {
    setEditData({
      ...editData,
      social_media_url: e.target.value,
    });
  };

  const openModal = (
    id,
    first_name,
    last_name,
    email,
    username,
    password,
    bio,
    location,
    social_media_url
  ) => {
    setIsEdit(true);
    setEditData({
      id,
      first_name,
      last_name,
      email,
      username,
      password,
      bio,
      location,
      social_media_url,
    });
  };

  const closeModal = () => {
    setIsEdit(false);
  };

  const getData = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get(`${baseUrl}/user`, {
      headers: {
        authoorization: token,
      },
    });
    setUsers(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="container d-flex flex-column">
        <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>List Users</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Bio</th>
              <th scope="col">Location</th>
              <th scope="col">Social Media URL</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.bio}</td>
                  <td>{item.location}</td>
                  <td>{item.social_media_url}</td>
                  <td>
                    <Button
                      text="edit"
                      action={() =>
                        openModal(
                          item.id,
                          item.first_name,
                          item.last_name,
                          item.email,
                          item.username,
                          item.password,
                          item.bio,
                          item.location,
                          item.social_media_url
                        )
                      }
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <EditModal
          edit={isEdit}
          close={closeModal}
          changeFirstName={setFirstName}
          changeLastName={setLastName}
          changeEmail={setEmail}
          changeUsername={setUsername}
          changePassword={setPassword}
          changeBio={setBio}
          changeLocation={setLocation}
          changeSocialMedia={setSocialMedia}
          data={editData}
          update={update}
          isError={isError}
          error={error}
        />
      </div>
    </React.Fragment>
  );
};

export default User;
