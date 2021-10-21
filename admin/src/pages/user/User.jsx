import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish
} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './user.css';
import { useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage';
import app from '../../firebase';
import { updateClient } from '../../redux/apiCalls';
import { format } from 'timeago.js';

const User = () => {
  const location = useLocation();
  const userId = location.pathname.split('/')[2];
  const [clientId, setClientId] = useState(userId);

  // GET FROM REDUX
  const client = useSelector((state) =>
    state.client.clients.find((client) => client._id === userId)
  );
  // SEND TO REDUX
  const dispatch = useDispatch();

  const [file, setFile] = useState(client?.img);
  const [username, setUsername] = useState(client?.username);
  const [fullName, setFullName] = useState(client?.fullName);
  const [email, setEmail] = useState(client?.email);
  const [phoneNumber, setPhoneNumber] = useState(client?.phoneNumber);
  const [title, setTitle] = useState(client?.title);
  const [createdAt, setCreatedAt] = useState(client?.createdAt);
  const [address, setAddress] = useState(client?.address);

  // SUBMIT BUTTON
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const id = clientId;
            const client = {
              username,
              fullName,
              email,
              phoneNumber,
              address,
              createdAt,
              title,
              img: downloadURL,
              _id: id
            };

            updateClient(id, client, dispatch);
            setClientId(clientId);

            console.log('client working', client);
            if (client) {
              alert('Updated!!');
            }
          });
        }
      );
    } catch {
      const id = clientId;
      const client = {
        username,
        fullName,
        email,
        phoneNumber,
        address,
        createdAt,
        title,
        img: file,
        _id: id
      };

      await updateClient(id, client, dispatch);
      setClientId(clientId);

      console.log('client', client);
      if (client) {
        alert('Updated!!');
      }
    }
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          {/* <button className="userAddButton">Create</button> */}
        </Link>
      </div>
      <div className="userContainer">
        {/* Left */}
        <div className="userShow">
          <div className="userShowTop">
            <img src={client?.img} alt="BA-png-black" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{client?.fullName}</span>
              <span className="userShowUserTitle">{client?.title}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{client?.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">
                {format(client?.updatedAt)}
              </span>
            </div>
            <span className="userShowTitle">Contact</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{client?.phoneNumber}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{client?.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{client?.address}</span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="userUpdate">
          <h2 className="userUpdateTitle">Edit</h2>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              {/* 1st */}
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder={client?.username}
                  className="userUpdateInput"
                />
              </div>
              {/* 2nd */}
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  name="fullName"
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  placeholder={client?.fullName}
                  className="userUpdateInput"
                />
              </div>
              {/* 3rd */}
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder={client?.email}
                  className="userUpdateInput"
                />
              </div>
              {/* 4th */}
              <div className="userUpdateItem">
                <label>Title</label>
                <input
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder={client?.title}
                  className="userUpdateInput"
                />
              </div>
              {/* 5th */}
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  name="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text"
                  placeholder={client?.phoneNumber}
                  className="userUpdateInput"
                />
              </div>
              {/* 6th */}
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder={client?.address}
                  className="userUpdateInput"
                />
              </div>
              {/* 7th */}
              <div className="userUpdateItem">
                <label>Account Created Date</label>
                <input
                  name="createdAt"
                  onChange={(e) => setCreatedAt(e.target.value)}
                  type="text"
                  disabled={client}
                  placeholder={client?.createdAt}
                  style={{ cursor: 'not-allowed' }}
                  className="userUpdateInput"
                />
              </div>
            </div>
            {/* right */}
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src={client?.img}
                  alt="BA-png-black"
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  id="file"
                  style={{ display: 'none' }}
                />
              </div>
              <button onClick={handleClick} className="userUpdateButton">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
