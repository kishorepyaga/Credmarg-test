import { Link, Outlet } from "react-router-dom";

export default function HomeLayout(){
    return <>
        <div><Link to={"/"}>Home</Link></div>
        <Outlet/>
    </>
}