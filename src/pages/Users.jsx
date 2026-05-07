import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
    const { id } = useParams();

    const [ user, setUser ] = useState({});

    async function fetchData() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
    }
    
    useEffect(() => {
        fetchData();
    }, [id])


    return (
        <div>
            <Link to="/">Back to home</Link>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h2>{user.id}</h2>
        </div>
    );
}

export default Users;