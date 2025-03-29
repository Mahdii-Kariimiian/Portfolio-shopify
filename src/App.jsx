import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./components/Projects";
import Order from "./pages/Order";
import BasicPlan from "./components/BasicPlan";
import IntermediatePlan from "./components/IntermediatePlan";
import AdvancedPlan from "./components/AdvancedPlan";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <Router>
            <div
                className={
                    isDarkMode
                        ? "bg-darkerGreen text-white"
                        : "bg-white text-gray-800"
                }
            >
                <div className="relative flex flex-col min-h-screen">
                    {/* Button for toggling dark mode */}

                    <div className="relative">
                        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
                                path="/about"
                                element={<About isDarkMode={isDarkMode} />}
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
                        </Routes>
                    </main>
                    <Footer isDarkMode={isDarkMode} />
                </div>
            </div>
        </Router>
    );
}

export default App;
