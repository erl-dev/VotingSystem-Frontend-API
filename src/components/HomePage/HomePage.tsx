// HomePage.tsx
import React from "react";
import Background from "../../components/Background/Background";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import RegisterForm from "../../components/Register/RegisterForm";

interface HomePageProps {
  heroData: { text1: string; text2: string }[];
  heroCount: number;
  setHeroCount: React.Dispatch<React.SetStateAction<number>>;
  playStatus: boolean;
  setPlayStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePage: React.FC<HomePageProps> = ({
  heroData,
  heroCount,
  setHeroCount,
  playStatus,
  setPlayStatus,
}) => {
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default HomePage;
