import React from "react";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function Create(){
    const f = useFormik({
        initialValues: {
            name:"",
            username:"",
            email:"",
            phone:"",
            img:""
        },
        validate: values => {
            const errors = {};
            if(!values.name){
                errors.name = "Required";
            }else if (values.name.length < 3) {
                errors.name = "Must be 3 characters or more";
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
              }
              return errors;
        },onSubmit: async (values) => {
            console.log(values)
            event.preventDefault();
            axios.post("http://localhost:3000/users" , values)
            .then(res => navigate('/'))
            
            .catch (err => console.log(err));
        }
    })
    return(
        <div className="d-flex w-100 px-2 bg-light">
            <div className=" border bg-white shadow px-1 pt-3 pb-5 rounded">
         <Form onSubmit={f.handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={f.values.name} onChange={f.handleChange} />
              
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control as="textarea" type="text" name="username" value={f.values.username} onChange={f.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control as="textarea" type="text" name="email" value={f.values.email} onChange={f.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control as="textarea" type="text" name="phone" value={f.values.phone} onChange={f.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="img" value={f.values.img} onChange={f.handleChange} />
            </Form.Group>
           <div>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="success" type="submit">
                Back
            </Button></div>
        </Form>
        </div>
        </div>
    )
}
export default Create;