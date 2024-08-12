import { Component } from 'react';
import './style.css'; 

class UserCard extends Component {
  render(props) {
    const { userData } = this.props;

    return (
      <div className="user-card">
       <ul>
        <li>
        <h3>{userData.name}</h3>
        </li>
        <li>
        <p>Email: {userData.email}</p>
        </li>
        <li>
        <p>Password: {userData.password}</p>
        </li>
        <li>
        <p>Courses: {userData.course.join(', ')}</p>
        </li>
        <li>
        <p>City: {userData.city}</p>
        </li>
       </ul>
      </div>
    );
  }
}

export default UserCard;
