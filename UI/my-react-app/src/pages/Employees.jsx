import { Form, json, redirect, useLoaderData } from "react-router-dom";
import Employee from "../elements/Employee";
import { useState } from "react";

export default function Employees(){
    const [open, setOpen] = useState(false)
    const data = useLoaderData()
    console.log(data)
    return <div style={{margin: '10px'}}>
        <h1>Employees</h1>
        <ul>
            {data.map(d => <Employee key={d.id} name={d.name} designation={d.designation} ctc={d.ctc} email={d.email} id={d.id}/>)}
        </ul>
        <button onClick={() => setOpen(prev => !prev)}>Toggle Form</button>
        {open &&
            <Form method="post">
                <label htmlFor="name">Name: 
                    <input type="text" name="name" id="name" required/>
                </label><br/>
                <label htmlFor="designation">Designation: 
                    <input type="text" name="designation" id="designation" required />
                </label><br/>
                <label htmlFor="email">Email: 
                    <input type="email" name="email" id="email" required />
                </label><br/>
                <label htmlFor="ctc">CTC: 
                    <input type="number" name="ctc" id="ctc" required />
                </label><br/>
                <button>Add employee</button>
            </Form>
        }
    </div>
}

export async function loader(){
    const response = await fetch('http://localhost:8080/employees', );//{ mode: "no-cors", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json',}})//.then(res => res.json()).then(data => console.log);
    if(!response.ok)
        throw json({ message: 'some error' }, {status: 500})
    const data = await response.json();
    return data;
}

export async function action({ request }){
    console.log("employee action")
    const fd = await request.formData()
    const data = {
        name: fd.get('name'),
        designation: fd.get('designation'),
        ctc: fd.get('ctc'),
        email: fd.get('email')
    }
    console.log(data);
    const response = await fetch('http://localhost:8080/employees',
        { 
            method: 'post', 
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    if(!response.ok)
        throw json({ message: 'some issue' })
    return redirect("/employees")
}