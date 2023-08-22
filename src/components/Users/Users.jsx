import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect, useState } from "react";

const auth = getAuth(app);

const Users = () => {

    const user = auth.currentUser;
    const [loggedUser, setLoggedUser] = useState([]);

   useEffect(() => {
    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
        const loggedUser = {displayName, email, photoURL, emailVerified, uid};
        setLoggedUser(loggedUser);
    }
   }, [user])

   const logOut = () => {
    signOut(auth)
    .then((result) => {
        console.log(result);
        setLoggedUser([]);
    })
    .catch((error) => {
        console.log(error.message);
    })
   }

    console.log(typeof(loggedUser));
    const {displayName, email, photoURL, uid} = loggedUser;

    return (
        <div>
            <br /><br />
            <div className="border w-6/12 mx-auto p-5 rounded-2xl bg-green-200">
                <div>
                    <img src={photoURL} alt="" />
                </div>
                <h3>Name: {displayName}</h3>
                <p>Email: {email}</p>
                <p>UID: {uid}</p>
                <br />
                <div className="text-center">
                    <button onClick={logOut} className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md">Sign out</button>
                </div>
            </div>
        </div>
    );
};

export default Users;