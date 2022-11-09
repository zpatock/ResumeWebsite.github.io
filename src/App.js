import MainPage from "./Pages/mainPage";
import Layout from "./components/NavBar/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkExperience1 from "./Pages/workExperience1";
import WorkExperience2 from "./Pages/workExperience2";
import WorkExperience3 from "./Pages/workExperience3";
import Coursework from "./Pages/courseWork";
import EducationSkills from "./Pages/educationSkills";
import ProjectsPage from "./Pages/projectsPage";


// Main function that uses a browser router to create the SPA functionality

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout></Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/courseWork" element={<Coursework />} />
          <Route path="/educationSkills" element={<EducationSkills />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/workExperience1" element={<WorkExperience1 />} />
          <Route path="/workExperience2" element={<WorkExperience2 />} />
          <Route path="/workExperience3" element={<WorkExperience3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
