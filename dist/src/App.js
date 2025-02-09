import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import IntroductionSection from './components/IntroductionSection';
import ExpertiseSection from './components/ExpertiseSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import ScrollController from './components/ScrollController';
import SentimentPage from './pages/SentimentPage';
import MachineLearning from './pages/MachineLearning';
import EmploymentOne from './components/Employment_one';
import EmploymentTwo from './components/Employment_two';
import EmploymentThree from './components/Employment_three';
import ProjectList from './pages/ProjectList';
import './App.css';
const App = () => {
    return (_jsxs(Router, { children: [_jsx(ScrollToTop, {}), _jsx(CustomCursor, {}), _jsx(ScrollController, {}), _jsx(Navigation, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(MainPage, {}) }), _jsx(Route, { path: "/machinelearning", element: _jsx(MachineLearning, {}) }), _jsx(Route, { path: "/sentimentpage", element: _jsx(SentimentPage, {}) }), _jsx(Route, { path: "/projectlist", element: _jsx(ProjectList, {}) })] })] }));
};
const MainPage = () => {
    return (_jsxs("div", { className: "bg-black text-white min-h-screen", children: [_jsx("section", { id: "header", className: "h-screen", children: _jsx(Header, {}) }), _jsx("section", { id: "intro", className: "h-screen", children: _jsx(IntroductionSection, {}) }), _jsx("section", { id: "expert", className: "h-screen", children: _jsx(ExpertiseSection, {}) }), _jsx("section", { id: "frontend-experience", className: "h-screen", children: _jsx(EmploymentOne, {}) }), _jsx("section", { id: "backend-experience", className: "h-screen", children: _jsx(EmploymentTwo, {}) }), _jsx("section", { id: "project-experience", className: "h-screen", children: _jsx(EmploymentThree, {}) }), _jsx("section", { id: "work", className: "h-screen", children: _jsx(WorkSection, {}) }), _jsx("section", { id: "contact", className: "h-screen", children: _jsx(ContactSection, {}) })] }));
};
export default App;
