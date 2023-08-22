import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Login = () => {

    const handleFormData = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    return (
        <div className="text-center">
            <br /><br />
            <h3 className="text-2xl">Login</h3>
            <br />
            <form onSubmit={handleFormData} className="[&>*]:m-1 [&>*]:rounded-2xl [&>*]:border [&>*]:px-2 [&>*]:py-1 bg-green-200 w-6/12 mx-auto p-5 rounded-2xl">
                <input type="email" name="email" id="email" placeholder="Type Your Email" />
                <br />
                <input type="password" name="password" id="password" placeholder="Type Your Password" />
                <br />
                <button className="font-semibold text-white bg-green-600" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;