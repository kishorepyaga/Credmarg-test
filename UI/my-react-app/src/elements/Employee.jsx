export default function Employee({id, name, designation, email, ctc}){
    return <div style={{ border: 'solid', padding: '10px', margin: '10px' }}>
        <p>{id}</p>
        <p>{name}</p>
        <p>{designation}</p>
        <p>{email}</p>
        <p>{ctc}</p>
    </div>
}