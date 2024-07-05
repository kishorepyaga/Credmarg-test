import { Link } from "react-router-dom";

export default function Home(){
    return <div>
        <h1>Welcome to Home!</h1>
        <p><Link to={'employees'}>Employees</Link></p>
        <p><Link to={'vendors'}>Vendors</Link></p>
        <p><Link to={'emails'}>Emails</Link></p>
    </div>
}