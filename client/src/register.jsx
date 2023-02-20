import React, {useState} from "react";



export const Register = (props) =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

  const handleSubmit =(e) => {
     e.preventDefault();
     const data = { name,email, pass };

   fetch('http://localhost:3003/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    // handle successful response
    if (data.status === 'success') {
        // display success message or redirect to a different page
        alert('Doctor registration successful!');
    } else {
        // handle other cases, such as errors
        alert(data.message);
      }
  })
  .catch(error => {
    // handle error
    alert('An error occurred. Please try again.');
  });
}
    

    return(
        <>
        <form onSubmit={handleSubmit} method="POST">
            <label For="name">name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="name" id="name" name="name"/>

            <label For="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your-email" id="email" name="email"/>

            <label For="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="pass"/>
            <button>Register</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')} >already have an account? login</button>

        </>
        
    )
}