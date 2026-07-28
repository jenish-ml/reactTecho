import { useEffect, useState } from 'react'

const FetchData = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            
            setUsers(data);
            setLoading(false);
        }

        fetchUsers();
    }, []);

  return (
    <>
        {loading && <p>Loading...</p>}


        <h1>Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>


    </>
  )
}

export default FetchData