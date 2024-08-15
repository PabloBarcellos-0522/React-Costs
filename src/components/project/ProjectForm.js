import { useEffect, useState } from "react"

import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./ProjectForm.module.css"

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "get",
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

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
      <Select name="category_id" text="Selecione a categoria" options={categories} />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm
