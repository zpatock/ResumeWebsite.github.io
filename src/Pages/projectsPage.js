
import Projects from "../components/Cards/projects";

function ProjectsPage() {
  return (
    <div>
      <br></br>
      <Projects name="Java/SQL Web Project">
        <ul>
          <li>Built an SQL database to allow users to keep track of invoices, customers, and expenses for tax</li>
          <li>Utilized JSP, and HTML to develop a front end for the user</li>
        </ul>
      </Projects>
      <br></br>
      <Projects name="8-Tile Puzzle">
        <ul>
          <li>Written in Java and utilized a GUI for user interface</li>
          <li>Implemented different search algorithms to solve the 8-puzzle game </li>
        </ul>
      </Projects>
    </div>
  );
}

export default ProjectsPage;
