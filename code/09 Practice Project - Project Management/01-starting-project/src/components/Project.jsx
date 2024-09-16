import {useRef} from "react";

export default function Project({
                                    projects,
                                    currentId,
                                    setProjects,
                                    handleRemoveProject
                                }) {

    const taskRef = useRef();

    function handleAddTask(idx, value) {
        let project = projects[idx];
        project.tasks.push(value);
        setProjects([...projects]);
    }

    function handleRemoveTask(projectId,taskId) {
        let project = projects[projectId];
        project.tasks.splice(taskId, 1);
        setProjects([...projects]);
    }
    
    return (<>
            <h1>{projects[currentId].title}</h1>
            <div>{projects[currentId].description}</div>
            <div>{projects[currentId].dueDate}</div>
            <button onClick={handleRemoveProject}>Delete Project</button>
            <input ref={taskRef} type={"text"}/>
            <button className="btn btn-primary" onClick={()=> handleAddTask(currentId, taskRef.current?.value)}>Add
                task
            </button>
            {projects[currentId].tasks.map((task, index) =>
                <div key={index}>{task}
                    <button onClick={() => handleRemoveTask(currentId, index)}>Delete task</button>
                </div>)}
        </>
    )
}
    