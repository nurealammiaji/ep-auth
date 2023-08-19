

const Login = () => {
    return (
        <div>
            <br /><br />
            <h3 className="text-2xl">Login</h3>
            <br />
            <form className="[&>*]:m-1 [&>*]:rounded-2xl [&>*]:border [&>*]:px-2 [&>*]:py-1 bg-green-100 w-6/12 mx-auto p-5 rounded-2xl">
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