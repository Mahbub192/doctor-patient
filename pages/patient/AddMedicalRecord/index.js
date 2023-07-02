import AddReport from "@/components/PatientDashboard/AddReport";
import LeftNaveBar from "@/components/PatientDashboard/LeftNaveBar";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
const addMedicalRecord = () => {
    return (
      <div className="flex flex-wrap">
        <div className="w-1/5 ">
          <LeftNaveBar />
        </div>
        <div className="w-4/5">
          <AddReport />
        </div>
      </div>
    );
  };

export default addMedicalRecord;