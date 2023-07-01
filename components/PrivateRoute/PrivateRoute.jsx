import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import { useRouter } from 'next/navigation'


const PrivateRoute = ({ children }) => {
    const router = useRouter()
    const { user, loading } = useContext(AuthContext);
    console.log('private user', user);
    console.log("loading", loading);
    if (loading) {
      return (
        <div className="h-80vh">
          <p className="text-center bg-red-500">Loading</p>
        </div>
      );
    }
  
    if (user) {
      return children;
    }
    // return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    return  router.push('/')
  };
  
  export default PrivateRoute;
  