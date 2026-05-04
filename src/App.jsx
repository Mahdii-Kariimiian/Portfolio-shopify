import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import MobileMenuOverlay from "./components/MobileMenuOverlay";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Projects from "./components/Projects";
import ProjectPage from "./pages/ProjectPage";
import Order from "./pages/Order";
import BasicPlan from "./components/BasicPlan";
import IntermediatePlan from "./components/IntermediatePlan";
import AdvancedPlan from "./components/advancedPlan";
import ServiceDetail from "./components/ServiceDetail";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <LanguageProvider>
            <Router>
                <div
                    className={
                        isDarkMode
                            ? "bg-darker-bg text-white"
                            : "bg-light-bg text-gray-900"
                    }
                >
                    <div className="relative flex flex-col min-h-screen">
                        <div className="relative">
                            <Header
                                isDarkMode={isDarkMode}
                                setIsDarkMode={setIsDarkMode}
                                isMenuOpen={isMenuOpen}
                                setIsMenuOpen={setIsMenuOpen}
                            />
                        </div>

                        <main className="flex-grow">
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Home isDarkMode={isDarkMode} />}
                                />
                                <Route
                                    path="/projects"
                                    element={<Projects isDarkMode={isDarkMode} />}
                                />
                                <Route
                                    path="/projects/:projectId"
                                    element={<ProjectPage isDarkMode={isDarkMode} />}
                                />
                                <Route
                                    path="/about"
                                    element={<AboutPage isDarkMode={isDarkMode} />}
                                />
                                <Route
                                    path="/contact"
                                    element={<Contact isDarkMode={isDarkMode} />}
                                />
                                <Route
                                    path="/order"
                                    element={<Order isDarkMode={isDarkMode} />}
                                />
                                <Route
                                    path="/order/basic"
                                    element={<BasicPlan isDarkMode={isDarkMode} />}
                                />
                                <Route
                                    path="/order/intermediate"
                                    element={
                                        <IntermediatePlan isDarkMode={isDarkMode} />
                                    }
                                />
                                <Route
                                    path="/order/advanced"
                                    element={
                                        <AdvancedPlan isDarkMode={isDarkMode} />
                                    }
                                />
                                <Route
                                    path="/services/:slug"
                                    element={
                                        <ServiceDetail isDarkMode={isDarkMode} />
                                    }
                                />
                            </Routes>
                        </main>
                        <Footer isDarkMode={isDarkMode} />
                    </div>
                    
                    {/* Mobile Menu Overlay - rendered at root level */}
                    <MobileMenuOverlay
                        isOpen={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                        isDarkMode={isDarkMode}
                        setIsDarkMode={setIsDarkMode}
                    />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;
