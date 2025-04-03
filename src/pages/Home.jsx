import { useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = ({ isDarkMode }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Hero isDarkMode={isDarkMode} />
            <Projects isDarkMode={isDarkMode} />
        </div>
    );
};

export default Home;
