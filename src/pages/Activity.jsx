import { useState } from 'react';

const Activity = () => {
    const [formData, setFormData] = useState({
        username :'',
        email : ''
    });
  return (
    <>
    <h2>Form Display</h2>
    <input type="text" onChange={(e) => setFormData({ ...formData, username: e.target.value })} placeholder='Enter Username' />
    <input type="text" onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='Enter Email' />
    <p>Username: {formData.username}</p>
    <p>Email: {formData.email}</p>
    </>
  )
}

export default Activity