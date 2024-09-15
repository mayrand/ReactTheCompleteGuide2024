import {useRef, useState} from "react";

function App() {
    const [projects, setProjects] = useState([]);
    const [addingProject, setAddingProject] = useState(false);
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    
    function handleAddProject() { 
        setProjects([...projects, {title: title.current.value, description: description.current.value, dueDate: dueDate.current.value}]);
        setAddingProject(false);
    }
    return (
        <>
            <div className="container">
                <div className="menu">
                    <h2>Your projects:</h2>
                    {projects.map(project => <div key={project.title}>{project.title}</div>)}
                    <button className="btn btn-primary" onClick={()=>setAddingProject(true)} disabled={addingProject}>Add Project</button>
                </div>
                <div className="content">
                    {addingProject && <>
                    <button className="btn" onClick={()=>setAddingProject(false)} >Cancel</button>
                    <button className="btn btn-primary" onClick={handleAddProject} >Save</button>
                    <input ref={title} type={"text"}/>
                    <input ref={description} type={"text"}/>
                    <input ref={dueDate} type={"date"}/>
                    </>}
                    {!addingProject && <>
                    <h1>No Project Selected</h1>
                    <p>Select a project or get started with a new one</p>
                    <button className="btn btn-primary" onClick={()=>setAddingProject(true)} disabled={addingProject}>Add Project</button>
                    </>}
                </div>
            </div>
        </>
    );
}

export default App;
