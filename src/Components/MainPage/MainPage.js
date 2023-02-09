import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [inputName, setInputName] = useState("")
  const [inputAge, setInputAge] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setPassword] = useState("")

  function btnEnviar (){
    console.log(`Name: ${inputName}\nAge: ${inputAge}\nEmail: ${inputEmail}\nPassword: ${inputPassword}`)
    clearEntry()
  }

  function clearEntry(){
    setInputName("")
    setInputAge("")
    setInputEmail("")
    setPassword("")
  }
  function modifyInputName(event){
    setInputName(event.target.value)
  }

  function modifyInputAge(event){
    setInputAge(Number(event.target.value))
  }

  function modifyInputEmail(event){
    setInputEmail(event.target.value)
  }

  function modifyInputPassword(event){
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={inputName} onChange={modifyInputName}/>
        </label>
        <label>
          Idade:
          <Input value={inputAge} onChange={modifyInputAge}/>
        </label>  
        <label>
          Email:
        </label>
        <Input type="email" value={inputEmail} onChange={modifyInputEmail}/>
        <label>
          Senha:
        </label>
        <Input type="password" value={inputPassword} onChange={modifyInputPassword}/>
     
        <button onClick={btnEnviar}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
