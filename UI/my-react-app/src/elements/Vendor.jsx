export default function Vendor({id, name, email, upi}){
    return <div style={{ border: 'solid', padding: '10px', margin: '10px' }}>
        <p>{id}</p>
        <p>{name}</p>
        <p>{email}</p>
        <p>{upi}</p>
    </div>
}