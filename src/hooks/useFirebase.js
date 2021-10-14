import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleUser = result.user
                setUser(googleUser);
                console.log(googleUser);
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            })
    }

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const githubUser = result.user
            setUser(githubUser);
            console.log(githubUser);
        })
        .catch(error => {
            setError(error.message);
            console.log(error.message);
        })
    }

    const signInUsingFacebook = () => {
        signInWithPopup(auth, fbProvider)
        .then(result => {
            const facebookUser = result.user
            setUser(facebookUser);
            console.log(facebookUser);
        })
        .catch(error => {
            setError(error.message);
            console.log(error.message);
        })
    }

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
            setUser({})
            })
            .catch(error => {
            setError(error.message)
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change',user)
                setUser(user);
            }
        })
    }, [])
    
    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        signInUsingFacebook,
        handleLogout
    }
}
export default useFirebase;