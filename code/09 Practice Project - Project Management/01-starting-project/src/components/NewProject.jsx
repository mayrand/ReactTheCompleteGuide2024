export default function NewProject({
                                    handleAddProject,
                                    setAddingProject,
                                    title,
                                    description,
                                    dueDate
                                }) {

    return (<>
            <button className="btn" onClick={() => setAddingProject(false)}>Cancel</button>
            <button className="btn btn-primary" onClick={handleAddProject}>Save</button>
            <input ref={title} type={"text"}/>
            <input ref={description} type={"text"}/>
            <input ref={dueDate} type={"date"}/>
        </>
    )
}
    