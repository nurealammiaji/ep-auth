

const Register = () => {

    const handleEmail = (event) => {
        console.log(event.target.value);
    }

    const handlePassword = (event) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <br /><br />
            <h3 className="text-2xl">Register</h3>
            <br />
            <form className="[&>*]:m-1 [&>*]:rounded-2xl [&>*]:border [&>*]:px-2 [&>*]:py-1 bg-green-100 w-6/12 mx-auto p-5 rounded-2xl">
                <input type="text" name="name" id="name" placeholder="Type Your Name" />
                <br />
                <input type="email" name="email" id="email" placeholder="Type Your Email" />
                <br />
                <input onBlur={handlePassword} type="password" name="password" id="password" placeholder="Type Your Password" />
                <br />
                <button className="font-semibold text-white bg-green-600" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;