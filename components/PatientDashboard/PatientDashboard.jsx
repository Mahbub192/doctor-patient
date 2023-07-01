import { AuthContext } from "@/providers/AuthProvider";
import Link from "next/link";
import { useContext } from "react";
import LeftNaveBar from "./LeftNaveBar";

const PatientDashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="w-1/5">
        <LeftNaveBar />
      </div>
      <div className="w-3/5">

      </div>
    </div>
  );
};

export default PatientDashboard;
