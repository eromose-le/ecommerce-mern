import './newUser.css';

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        {/* 1st */}
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="austine" />
        </div>
        {/* 2nd */}
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Gberaese Eons Austine" />
        </div>
        {/* 3rd */}
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="erons24@yahoo.com" />
        </div>
        {/* 4th */}
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        {/* 5th */}
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+234 815 901 1732" />
        </div>
        {/* 6th */}
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Jakande phase 1, Lekki" />
        </div>
        {/* 7th */}
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="Other" value="Other" />
            <label for="Other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
