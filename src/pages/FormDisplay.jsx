    import React from 'react'
    import { useState } from 'react';

    const FormDisplay = () => {
        const [value, setValue] = useState('');
        const [name, setName] = useState('Techolas');
        

    return (
        <>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter Something' />
            <p>{value}</p>

            <h1>Hello {name}</h1>
            <button onClick={() => setName((prev) => (prev === "Techolas" ? "Jenish" : "Techolas"))}>Click Me</button>
        </>
    )
    }

    export default FormDisplay