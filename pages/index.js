import BookOurDoctor from "@/components/Home/BookOurDoctor";
import ClinicAndSpecialities from "@/components/Home/ClinicAndSpecialities";
import Feature from "@/components/Home/Feature";
import HeroSection from "@/components/Home/HeroSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <ClinicAndSpecialities/>
      <Feature />
      <BookOurDoctor/>
    </>
  );
};

export default Index;
