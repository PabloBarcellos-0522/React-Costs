import ProjectForm from "../project/ProjectForm"
import styles from "./NewProject.module.css"
import { useNavigate } from "react-router-dom"

function NewProject() {
  const navigate = useNavigate()

  function createPost(project) {
    // initialize Costs and services
    project.costs = 0
    project.sevices = []

    fetch("http://localhost:5000/projects", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json)
      .then((data) => {
        console.log(data)
        // redrect
        navigate("/projects", { message: "Projeto criado com sucesso!" })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto, para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}

export default NewProject
