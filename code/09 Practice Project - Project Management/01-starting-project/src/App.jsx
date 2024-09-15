import {useRef, useState} from "react";

function App() {
    const [projects, setProjects] = useState([]);
    const [addingProject, setAddingProject] = useState(false);
    const [showProject, setShowProject] = useState(-1);
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const task = useRef();

    function handleAddProject() {
        setProjects([...projects, {
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value,
            tasks: []
        }]);
        setAddingProject(false);
    }
    
    function handleRemoveProject() {
        setProjects(projects.filter((val, idx) => idx !== showProject))
        setShowProject(-1);
    }

    function handleAddTask(idx) {
        let project = projects[idx];
        project.tasks.push(task.current.value);
        setProjects([...projects]);
    }

    function handleRemoveTask(projectId,taskId) {
        let project = projects[projectId];
        project.tasks.splice(taskId, 1);
        setProjects([...projects]);
    }

    return (
        <>
            <div className="container">
                <div className="menu">
                    <h2>Your projects:</h2>
                    {projects.map((project, index) => 
                        <div key={index}
                            onClick={() => setShowProject(index)}>{project.title}
                        </div>)}
                    <button className="btn btn-primary" onClick={() => setAddingProject(true)}
                            disabled={addingProject}>Add Project
                    </button>
                </div>
                <div className="content">
                    {addingProject && <>
                        <button className="btn" onClick={() => setAddingProject(false)}>Cancel</button>
                        <button className="btn btn-primary" onClick={handleAddProject}>Save</button>
                        <input ref={title} type={"text"}/>
                        <input ref={description} type={"text"}/>
                        <input ref={dueDate} type={"date"}/>
                    </>}
                    {!addingProject && showProject < 0 && <>
                        <h1>No Project Selected</h1>
                        <p>Select a project or get started with a new one</p>
                        <button className="btn btn-primary" onClick={() => setAddingProject(true)}
                                disabled={addingProject}>Add Project
                        </button>
                    </>}
                    {!addingProject && showProject > -1 && <>
                        <h1>{projects[showProject].title}</h1>
                        <div>{projects[showProject].description}</div>
                        <div>{projects[showProject].dueDate}</div>
                        <button onClick={handleRemoveProject}>Delete Project</button>
                        <input ref={task} type={"text"}/>
                        <button className="btn btn-primary" onClick={()=>handleAddTask(showProject)}>Add task</button>
                        {projects[showProject].tasks.map((task, index) =>
                                <div key={index}>{task}
                                    <button onClick={()=>handleRemoveTask(showProject,index)}>Delete task</button>
                                </div>)}
                    </>}
                </div>
            </div>
        </>
    );
}

export default App;
