import { useEffect } from "react";
import Hero from "../components/Hero";
import Results from "../components/Results";
import Services from "../components/Services";
import Process from "../components/Process";
import Trust from "../components/Trust";
import FinalCTA from "../components/FinalCTA";

const Home = ({ isDarkMode }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Hero isDarkMode={isDarkMode} />
            <Results isDarkMode={isDarkMode} />
            <Services isDarkMode={isDarkMode} />
            <Process isDarkMode={isDarkMode} />
            <Trust isDarkMode={isDarkMode} />
            <FinalCTA isDarkMode={isDarkMode} />
        </div>
    );
};

export default Home;
