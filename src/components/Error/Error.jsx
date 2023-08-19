import { useRouteError } from "react-router-dom";


const Error = () => {
    
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h3>{error.status}</h3>
            <h3>{error.statusText}</h3>
            <h4>{error.data} </h4>
        </div>
    );
};

export default Error;