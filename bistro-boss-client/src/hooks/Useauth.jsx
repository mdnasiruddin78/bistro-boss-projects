import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Useauth = () => {
   const auth = useContext(AuthContext)
   return auth
};

export default Useauth;