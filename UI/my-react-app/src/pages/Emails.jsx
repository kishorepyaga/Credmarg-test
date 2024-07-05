import { redirect, useLoaderData, useNavigate, useRouteLoaderData, useSubmit } from "react-router-dom";
import SendMails from "../elements/SendMails";

export default function Emails() {
    const data = useLoaderData()
    const navigate = useNavigate()
    const vendors = useRouteLoaderData('vendors')
    function onSendMails(ids){
        fetch('http://localhost:8080/sendMailToVendors', 
            { 
                method: 'post', 
                body: JSON.stringify(ids), 
                headers: {
                    'Content-Type': 'application/json'
                } 
            }).then(res => navigate("/emails"))
    }
    return <>
        <h1>Emails</h1>
        {data.length == 0 && <div>No emails sent as of now!</div>}
        <ul>
            {data.map(d => <li key={d.id}>
                <ul style={{margin: '20px'}}>
                    <li key={d.id}>{d.id}</li>
                        {d.emails.map(e => <li key={e}>
                    {e}
                </li>)}</ul>
            </li>)}
        </ul>
        <div style={{margin: '20px'}}></div>
        <h1>Send emails</h1>
        <SendMails vendors={vendors} onSendMails={onSendMails}/>
    </>
}

export async function loader(){
    const response = await fetch('http://localhost:8080/emails', );
    if(!response.ok)
        throw json({ message: 'some error' }, {status: 500})
    const data = await response.json();
    return data;
}