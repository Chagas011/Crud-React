import { useEffect, useState, useRef } from "react";
import Card from "../Card";
import api from "../../services/api";
import Form from "../Form";

export default function Home() {
  const [users, setUsers] = useState([])
  const [userEdit, setUserEdit] = useState(null)
  const inputName = useRef()
  const inputEmail = useRef()
  const inputAge = useRef()

  const handleSubmit = (e) => { 
    e.preventDefault() 
    if (
      !inputName.current.value || 
      !inputEmail.current.value ||
      !inputAge.current.value) { 
        alert("Preencha todos os campos")
        return
      }

      if (userEdit) { 
        updateUser(userEdit.id)
      }
      else { 
        createUsers()
      }
      
    
    clearInputs()
  }

  function clearInputs() {
    inputName.current.value = "";
    inputEmail.current.value = "";
    inputAge.current.value = "";
  }


  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");
    setUsers(usersFromApi.data)
  }


  async function createUsers() {

    await api.post('/usuarios', { 
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: inputAge.current.value
    })
    getUsers()
  }

  async function updateUser(id) { 
    await api.put(`/usuarios/${id}`, { 
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: inputAge.current.value
    })
    setUserEdit(null)
    getUsers()
    clearInputs()
  }

  function handleEdit(user) { 
    setUserEdit(user)
    inputName.current.value = user.name
    inputEmail.current.value = user.email
    inputAge.current.value = user.age
  }
  async function deleteUser(id){ 

    await api.delete(`/usuarios/${id}`)
    getUsers()
  }



  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center justify-center mt-10">
        <div className="w-full max-w-md p-6 bg-purple-200 shadow-md rounded-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Cadastro de Usuários
          </h2>
          {/* FORM */}
          <Form 
          inputName={inputName} 
          inputEmail={inputEmail} 
          inputAge={inputAge} 
          handleSubmit={handleSubmit}
          userEdit={userEdit}
          
          />

        </div>
      </div>

      {/* CARD */}
      <Card  users={users} deleteUser={deleteUser} handleEdit={handleEdit}/>
    </div>
  );
}
