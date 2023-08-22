import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

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
        setSuccess("");
        setError("");
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!/(?=(.*[a-z]){1,})/.test(password)) {
            setError("Add at least 1 lowercase character");
        }
        else if (!/(?=(.*[A-Z]){1,})/.test(password)) {
            setError("Add at least 1 uppercase character")
        }
        else if (!/(?=(.*[0-9]){2,})/.test(password)) {
            setError("Add at least 1 number")
        }
        else if (!/(?=(.*[!@#$%^&*()\-__+.]){1,})/.test(password)) {
            setError("Add at least 1 special character")
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError("");
            setSuccess("User account created successfully");
            event.target.reset();
            profileUpdate(loggedUser);
            emailVerification(loggedUser);
        })
        .catch((error) => {
            console.error(error.message);
            setError(error.message);
        })

        const profileUpdate = (user) => {
            updateProfile(user, {
                displayName: name,
            })
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error.message);
            })
        }

        const emailVerification = (user) => {
        sendEmailVerification(user)
        .then((result) => {
            console.log(result);
            alert("Please verify your email");
        })
        .catch((error) => {
            console.log(error.message);
        })
        }
    }

    return (
        <div className="text-center">
            <br /><br />
            <h3 className="text-2xl">Register</h3>
            <br />
            <form onSubmit={handleForm} className="[&>*]:m-1 [&>*]:rounded-2xl [&>*]:border [&>*]:px-2 [&>*]:py-1 bg-green-200 w-6/12 mx-auto p-5 rounded-2xl">
                <input onBlur={handleUseRef} ref={inputRef} type="text" name="name" id="name" placeholder="Type Your Name" />
                <br />
                <input onChange={handleEmail} type="email" name="email" id="email" placeholder="Type Your Email" required />
                <br />
                <input onBlur={handlePassword} type="password" name="password" id="password" placeholder="Type Your Password" required />
                <br />
                {(success.length > 0) ? <p className="text-green-500">{success}</p> : ""}
                {(error.length > 0 ) ? <p className="text-red-500">{error}</p> : ""}
                <button className="font-semibold text-white bg-green-600" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;