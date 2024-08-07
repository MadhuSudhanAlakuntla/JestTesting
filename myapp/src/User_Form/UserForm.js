import { useState } from 'react';

function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });
  };

  return (
    <div style={{textAlign:"center"}}>
    <form onSubmit={handleSubmit} style={{padding:"10px"}}>
      <div style={{padding:"10px"}}>
        <label htmlFor='name'>Name: </label>
        <input id='name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div style={{padding:"10px"}}>
        <label htmlFor='email'>Email: </label>
        <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
    </form>
    </div>
  );
}

export default UserForm;
