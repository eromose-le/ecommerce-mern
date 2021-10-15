import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './user.css';

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        {/* Left */}
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://i.ibb.co/2jNk5WT/BA-png-black.png"
              alt="BA-png-black"
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Gberaese Erons Austine</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">bazzcode244</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">01.01.2021</span>
            </div>
            <span className="userShowTitle">Contact</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+234 815 9011 732</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">
                erons.a.gberaese@gmail.com
              </span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Jakande, phase 1, Lekki</span>
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
                  type="text"
                  placeholder="bazzcode244"
                  className="userUpdateInput"
                />
              </div>
              {/* 2nd */}
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Gberaese Erons Austine"
                  className="userUpdateInput"
                />
              </div>
              {/* 3rd */}
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="erons.a.gberaese@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              {/* 4th */}
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+234 815 9011 732"
                  className="userUpdateInput"
                />
              </div>
              {/* 5th */}
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Jakande, phase 1, Lekki"
                  className="userUpdateInput"
                />
              </div>
            </div>
            {/* right */}
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://i.ibb.co/2jNk5WT/BA-png-black.png"
                  alt="BA-png-black"
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
