import React, { useState } from 'react'

const FormComponent = () => {
    const [nameVal, setNameVal] = useState('');
    const [emailVal, setEmailVal] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    function handleInputChange(event) {
        console.log(event);
        const { value } = event.target;
        setNameVal(value);
    }

    function handleEmailChange(event) {
        const { value } = event.target;
        setEmailVal(value);
    }

    function handleOnChange(event) {
        console.log(event.target.name);
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        // call the API and pass the name value
        console.log(nameVal, "nameVal");
        console.log(emailVal, "emailVal");

    }

    console.log(formData);




    return (
        <div>
            <h1>Form</h1>

            <form onSubmit={handleSubmit}>
                <input value={formData.name} name='name' id='name'
                    placeholder='Enter Your Name'
                    // onChange={handleOnChange} 
                    onChange={(event) => setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })}
                />


                <input type='email' name='email' id='email'
                    placeholder='Enter Your Email'
                    // onChange={handleOnChange}
                    value={formData.email}
                    onChange={(event) => setFormData({
                        ...formData,
                        [event.target.name]: event.target.value,
                    })}
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormComponent;
