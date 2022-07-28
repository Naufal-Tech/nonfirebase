import React from 'react';
import Button from './Button';
import '../styles/EditModal.css';

const EditModal = ({
  edit,
  close,
  data,
  changeFirstName,
  changeLastName,
  changeEmail,
  changeUsername,
  changePassword,
  changeBio,
  changeLocation,
  changeSocialMedia,
  update,
  isError,
  error,
}) => {
  if (edit) {
    return (
      <div className="modal-container">
        <div className="modal-box">
          <h3>Edit User</h3>
          <div>
            {isError === null ? (
              ' '
            ) : (
              <div>
                {error && (
                  <p style={{ color: 'red', fontWeight: 'bold' }}>
                    {error.message}
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="input">
            <label>First Name:</label>
            <br />
            <input
              type="text"
              value={data.first_name === null ? '' : data.first_name}
              onChange={changeFirstName}
            />
            <br />
            <label>Last Name:</label>
            <br />
            <input
              type="text"
              value={data.last_name === null ? '' : data.last_name}
              onChange={changeLastName}
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              type="email"
              value={data.email === null ? '' : data.email}
              onChange={changeEmail}
            />
            <br />
            <label>Username:</label>
            <br />
            <input
              type="text"
              value={data.username === null ? '' : data.username}
              onChange={changeUsername}
            />
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              value={data.password === null ? '' : data.password}
              onChange={changePassword}
            />
            <br />
            <label>Biodata:</label>
            <br />
            <input
              type="text"
              value={data.bio === null ? '' : data.bio}
              onChange={changeBio}
            />
            <br />
            <label>Location:</label>
            <br />
            <input
              type="text"
              value={data.location === null ? '' : data.location}
              onChange={changeLocation}
            />
            <br />
            <label>Social Media URL:</label>
            <br />
            <input
              type="text"
              value={
                data.social_media_url === null ? '' : data.social_media_url
              }
              onChange={changeSocialMedia}
            />
            <br />
          </div>
          <div className="btn-group">
            <Button text="edit" variant="primary" action={update} />
            <Button text="close" variant="danger" action={close} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default EditModal;
