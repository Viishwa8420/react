import { Component } from 'react';
import './style.css'; 
import UserCard from './UserCard '; 

const data = [
  {
    grid : 1,
    name : 'Kishan',
    email : 'kishan@gmail.com',
    password : 'kishan@123',
    course : ["html","css","bootstrap","js"],
    city : "surat"
},
{
    grid : 2,
    name : 'Jay',
    email : 'jay@gmail.com',
    password : 'kishan@123',
    course : ["photosho","figma","illustrator","adobe xd"],
    city : "rajkot"
},
{
    grid : 3,
    name : 'Ajay',
    email : 'ajay@gmail.com',
    password : 'ajay@123',
    course : ["html","css","bootstrap","nodejs"],
    city : "amareli"
},
{
    grid : 4,
    name : 'Nisha',
    email : 'nisha@gmail.com',
    password : 'nisha@123',
    course : ["html","css","bootstrap","python"],
    city : "vadodara"
}
];

class Data extends Component {
  render() {
    return (
      <div className="data-container">
        {data.map((user) => (
          <UserCard key={user.grid} userData={user} />
        ))}
      </div>
    );
  }
}

export default Data;
