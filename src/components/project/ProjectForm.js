import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./ProjectForm.module.css"

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        name="name"
        text="Nome do projeto"
        type="text"
        placeholder="Insira o nome do Projeto"
      />
      <Input
        name="budget"
        text="Orçamento Total"
        type="number"
        placeholder="Insira o orçamento total"
      />
      <Select name="category_id" text="Selecione a categoria" />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm
