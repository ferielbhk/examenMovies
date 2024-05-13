import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect , useState } from "react";
import { Container , Row , Button , Card } from "react-bootstrap";
function Home(){
    const [data , setData] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    } , [])
    return(
     <div><h1>List of Users</h1>
        <div>
            <Link to="/create" className="btn btn-success">Add +</Link>
        </div>
        {data.map((d,i)=>(
    <Card>
    <Card.Img variant="top" src={`images/${d.img}`} height={250}/>
    <Card.Body>
        <Card.Title>{d.name}</Card.Title>
        <Card.Text>
            Username : {d.username}
        </Card.Text>
        <Card.Text>
            Email : {d.email}
        </Card.Text>
        <Card.Text>
            phone : {d.phone}
        </Card.Text>
        <Button variant="info " >Read</Button>
        <Button variant="primary " >Edit</Button>
        <Button variant="danger" >Delete</Button>

    </Card.Body>
    </Card>
            ))}
        </div>
    );
}

export default Home;