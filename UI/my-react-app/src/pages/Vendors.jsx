import { Form, json, redirect, useRouteLoaderData } from "react-router-dom"
import Vendor from "../elements/Vendor"
import { useState } from "react"

export default function Vendors() {
    const [open, setOpen] = useState(false)
    const data = useRouteLoaderData('vendors')
    return <div style={{ margin: '10px' }}>
        <h1>Vendors</h1>
        <ul>
            {data.map(d => <Vendor key={d.id} name={d.name} upi={d.upi} email={d.email} id={d.id}/>)}
        </ul>
        <button onClick={() => setOpen(prev => !prev)}>Toggle Form</button>
        {open &&
            <Form method="post">
                <label htmlFor="name">Name: 
                    <input type="text" name="name" id="name" required/>
                </label><br/>
                <label htmlFor="email">Email: 
                    <input type="email" name="email" id="email" required />
                </label><br/>
                <label htmlFor="upi">UPI: 
                    <input type="text" name="upi" id="upi" required />
                </label><br/>
                <button>Add Vendor</button>
            </Form>
        }
    </div>
}

export async function loader(){
    const response = await fetch('http://localhost:8080/vendors', );
    if(!response.ok)
        throw json({ message: 'some error' }, {status: 500})
    const data = await response.json();
    return data;
}

export async function action({ request }){
    console.log("Vendor action")
    const fd = await request.formData()
    const data = {
        name: fd.get('name'),
        upi: fd.get('upi'),
        email: fd.get('email')
    }
    console.log(data);
    const response = await fetch('http://localhost:8080/vendors',
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
    return redirect("/vendors")
}