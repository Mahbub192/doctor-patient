import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import LeftNaveBar from "./LeftNaveBar";
import PatientInformation from "../../components/PatientDashboard/PatientInformation.jsx";

const PatientDashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-wrap">
      <div className="w-1/5 ">
        <LeftNaveBar />
      </div>
      <div className="w-3/5">
        <PatientInformation />
      </div>
    </div>
  );
};

export default PatientDashboard;
