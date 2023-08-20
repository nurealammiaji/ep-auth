import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <div className="text-center">
            <br /><br />
            <h3 className="text-2xl">Register</h3>
            <br />
            <form onSubmit={handleForm} className="[&>*]:m-1 [&>*]:rounded-2xl [&>*]:border [&>*]:px-2 [&>*]:py-1 bg-green-200 w-6/12 mx-auto p-5 rounded-2xl">
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