import DoctorLeftNaveBar from "./DoctorLeftNaveBar";
import PatientAppointment from "./PatientAppointment";

const DoctorDashboard = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/5 h-screen">
        <DoctorLeftNaveBar />
      </div>
      <div className="w-full md:w-4/5">
        <h1 className="text-xl font-bold my-12 pl-10">Patient List:</h1>
        <PatientAppointment />
      </div>
    </div>
  );
};

export default DoctorDashboard;
