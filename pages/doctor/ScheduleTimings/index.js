import DoctorLeftNaveBar from "@/components/DoctorDashboard/DoctorLeftNaveBar";
import ScheduleTimings from "@/components/DoctorDashboard/ScheduleTimings";

const DoctorDashboard = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/5 h-screen">
        <DoctorLeftNaveBar />
      </div>
      <div className="w-3/5 mx-auto">
        <ScheduleTimings />
      </div>
    </div>
  );
};

export default DoctorDashboard;