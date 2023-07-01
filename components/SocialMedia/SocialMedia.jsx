import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";

const SocialMedia = () => {
    const { googleLogin } = useContext(AuthContext);

    const handelGoogleLogin = () => {
        googleLogin()
          .then((result) => {
            const user = result.user;
            const saveUser = { name: user.displayName, email: user.email, image: user.photoURL };
            console.log('saveUser', saveUser);
            fetch(`https://summer-camp-server-sigma.vercel.app/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then(() => {
                navigate(from, { replace: true });
              });
          })
          .catch((error) => {
            console.log("google error message", error.message);
          });
      };

      
    return (
        <div className=" mt-5">
      <div className="w-full text-center mb-4">
        <button
          onClick={handelGoogleLogin}
          className="flex items-center justify-center gap-2 py-3 hover:bg-cyan-600 hover:text-white w-full bg-cyan-300 "
        >
          <FaGoogle></FaGoogle>
          <span>Google</span>
        </button>
      </div>
    </div>
    );
};

export default SocialMedia;