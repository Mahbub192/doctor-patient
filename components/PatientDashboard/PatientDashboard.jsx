import LeftNaveBar from "./LeftNaveBar";
import PatientInformation from "../../components/PatientDashboard/PatientInformation.jsx";

const PatientDashboard = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/5 ">
        <LeftNaveBar />
      </div>
      <div className="w-4/5">
        <PatientInformation />
      </div>
    </div>
  );
};

export default PatientDashboard;
