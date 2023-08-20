import { Link } from "react-router-dom";
import image from "../../../public/email-password.jpg";

const Home = () => {
    return (
        <div>
            <br /><br />
            <div className="grid gap-5 bg-green-200 rounded-md md:grid-cols-2">
                <div className="p-10">
                    <br />
                    <div className="[&>*]:text-4xl [&>*]:font-bold">
                        <h1>Welcome to</h1>
                        <h1 className="my-2">Email Password</h1>
                        <h1>Authentication</h1>
                    </div>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat provident quas voluptate in necessitatibus asperiores soluta ullam dignissimos debitis enim animi aut libero, ipsum, vitae ducimus velit sit deserunt voluptatum.</p>
                    <br />
                    <Link to="/register"><button className="px-5 py-2 font-semibold text-white bg-green-600 rounded-md">Getting Started</button></Link>
                </div>
                <div>
                    <img className="rounded-r-md" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;