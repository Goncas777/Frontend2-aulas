import {useState} from 'react';

function UserProfile() {
    const [user, setUser] = useState({ name: 'tomas miguel', age: 30 });

    function IncrementUser() {
        setUser({ ...user, age: user.age + 1 });
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={IncrementUser}>Increase Age</button>
        </div>
    );
}

export default UserProfile;