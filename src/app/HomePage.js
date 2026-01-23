import AdmissionProcess from "@/components/AdmissionProcess";
import MainSection from "@/components/MainSection";
import OurAchievement from "@/components/OurAchievement";
import OurStrengths from "@/components/OurStrengths";
import Specialization from "@/components/Specialization";
import WhyChooseUs from "@/components/WhyChooseUs";

export const HomePage = () => {
    return (
        <>
            <MainSection />
            <OurAchievement />
            <WhyChooseUs />
            <Specialization />
            <OurStrengths />
            <AdmissionProcess />
        </>
    );
};