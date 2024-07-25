import { useDispatch } from 'react-redux';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from './firebase';
import { signInSuccess } from './redux/user/userSlice';
import {useNavigate} from 'react-router-dom'
export default function OAuth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
      const handlGoogleAuth = async()=>{
         try {
           const provider = new GoogleAuthProvider();
           const auth = getAuth(app);
           const result = await signInWithPopup(auth, provider);
            console.log(result);
             const res = await fetch("/api/auth/google", {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify({
                 name: result.user.displayName,
                 email: result.user.email,
                 photo: result.user.photoURL,
               }),
             });
             const data = await res.json()
                dispatch(signInSuccess(data)) 
                 navigate("/sign-in")
         } catch (error) {
           console.log("couldin,t connect to google OAuth");
         }
      }
  return (
    <button onClick={handlGoogleAuth} type='button' className=' bg-red-700 p-3 rounded-lg text-white uppercase hover:opacity-90 disabled:opacity-80'>Continue with google</button>
  )
}
