import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = ({ isDarkMode }) => {
    return (
        <div>
            <Hero isDarkMode={isDarkMode} />
            <Projects isDarkMode={isDarkMode} />
        </div>
    );
};

export default Home;
