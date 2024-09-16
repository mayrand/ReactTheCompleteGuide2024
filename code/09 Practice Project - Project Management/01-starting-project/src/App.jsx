import {useRef, useState} from "react";
import Project from "./components/Project.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
    const [projects, setProjects] = useState([]);
    const [addingProject, setAddingProject] = useState(false);
    const [currentProjectId, setCurrentProjectId] = useState(-1);
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleAddProject() {
        setProjects([...projects, {
            id: projects.length,
            title: title.current?.value,
            description: description.current?.value,
            dueDate: dueDate.current?.value,
            tasks: []
        }]);
        setAddingProject(false);
    }
    
    function handleRemoveProject() {
        setProjects(projects.filter((val, idx) => idx !== currentProjectId))
        setCurrentProjectId(-1);
    }

    return (
        <>
            <div className="container">
                <div className="menu">
                    <h2>Your projects:</h2>
                    {projects.map((project, index) => 
                        <div key={index}
                            onClick={() => setCurrentProjectId(index)}>{project.title}
                        </div>)}
                    <button className="btn btn-primary" onClick={() => setAddingProject(true)}
                            disabled={addingProject}>Add Project
                    </button>
                </div>
                <div className="content">
                    {addingProject && <NewProject handleAddProject={handleAddProject} setAddingProject={setAddingProject} title={title} description={description} dueDate={dueDate} />}
                    {!addingProject && currentProjectId < 0 && <>
                        <h1>No Project Selected</h1>
                        <p>Select a project or get started with a new one</p>
                        <button className="btn btn-primary" onClick={() => setAddingProject(true)}
                                disabled={addingProject}>Add Project
                        </button>
                    </>}
                    {!addingProject && currentProjectId > -1 && <Project projects={projects} currentId={currentProjectId} setProjects={setProjects} handleRemoveProject={handleRemoveProject}/>}
                    {/*{!addingProject && currentProjectId > -1 && <Project title={title} description={description} dueDate={dueDate} handleRemoveProject={handleRemoveProject} handleAddTask={handleAddTask} handleRemoveTask={handleRemoveTask} currentProjectId={currentProjectId} />}*/}
                    {/*tasks={projects[currentProjectId].tasks}*/}
                </div>
            </div>
        </>
    );
}

export default App;
