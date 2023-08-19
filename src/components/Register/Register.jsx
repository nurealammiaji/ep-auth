import { useRef, useState } from "react";


const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formData, setFormData] = useState([]);

    const inputRef = useRef(null);
    const handleUseRef = () => {
        setName(inputRef.current.value);
    }
    // console.log(name);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    // console.log(email);

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    // console.log(password);

    const handleForm = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
    }

    return (
        <div>
            <br /><br />
            <h3 className="text-2xl">Register</h3>
            <br />
            <form onSubmit={handleForm} className="[&>*]:m-1 [&>*]:rounded-2xl [&>*]:border [&>*]:px-2 [&>*]:py-1 bg-green-100 w-6/12 mx-auto p-5 rounded-2xl">
                <input onBlur={handleUseRef} ref={inputRef} type="text" name="name" id="name" placeholder="Type Your Name" />
                <br />
                <input onChange={handleEmail} type="email" name="email" id="email" placeholder="Type Your Email" />
                <br />
                <input onBlur={handlePassword} type="password" name="password" id="password" placeholder="Type Your Password" />
                <br />
                <button className="font-semibold text-white bg-green-600" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;