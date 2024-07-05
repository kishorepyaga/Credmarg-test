import { useState } from "react";

export default function SendMails({ vendors, onSendMails }){
    const [checkedIds, setCheckedIds] = useState([]);

  const handleChange = (event) => {
    const { id, checked } = event.target;

    if (checked) {
      setCheckedIds([...checkedIds, id]);
    } else {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMails(checkedIds)
    console.log('Submitted form data:', checkedIds);
  };

    return <form onSubmit={handleSubmit}>
        <div>
            {vendors.map(v => <>
                <p key={v.id}>
                    <label htmlFor={v.name}>{v.name}
                        <input id={v.id} type="checkbox" value={v.id} name={v.name} onChange={handleChange} />
                    </label>
                </p>
            </>)}
        </div>
        <div>
            <button>
                Submit
            </button>
        </div>
    </form>
}