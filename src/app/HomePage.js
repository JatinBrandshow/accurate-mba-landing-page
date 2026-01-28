import AdmissionProcess from "@/components/AdmissionProcess";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import MainSection from "@/components/MainSection";
import OurAchievement from "@/components/OurAchievement";
import OurAlumni from "@/components/OurAlumni";
import OurRecruiters from "@/components/OurRecruiters";
import OurStrengths from "@/components/OurStrengths";
import Specialization from "@/components/Specialization";
import VideoSlider from "@/components/VideoSlider";
import WhyChooseUs from "@/components/WhyChooseUs";

export const HomePage = () => {
    return (
        <>
            <MainSection />
            {/* <OurAchievement />
            <WhyChooseUs />
            <Specialization />
            <VideoSlider />
            <OurStrengths />
            <OurRecruiters />
            <AdmissionProcess /> */}
            <OurAlumni />
            {/* <FAQ />
            <ContactUs /> */}
        </>
    );
};