import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import styles from "./Projects.module.css"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"

function Projects() {
  const location = useLocation()
  let message = ""
  if (location.state) {
    message = location.state.message
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meu Projetos</h1>
        <LinkButton to={"/newproject"} text={"Criar projeto"} />
      </div>
      {message && <Message msg={message} type="sucess" />}
      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  )
}

export default Projects
