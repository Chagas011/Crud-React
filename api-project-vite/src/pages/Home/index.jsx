import { useEffect, useState, useRef } from "react";
import Trash from "../../assets/lixeira.svg";
import api from "../../services/api";
export default function Home() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputEmail = useRef()
  const inputAge = useRef()

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

          <form>
            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                ref={inputName}
                type="text"
                id="nome"
                name="nome"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                ref={inputEmail}
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="idade"
                className="block text-sm font-medium text-gray-700"
              >
                Idade
              </label>
              <input
                ref={inputAge}
                type="text"
                id="idade"
                name="idade"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite sua idade"
                required
              />
            </div>

            <button
              data-testid="button"
              onClick={createUsers}
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
      {users.map((user) => (
        <div className="max-w-md mx-auto mt-10 mb-6" key={user.id}>
          <div className="w-full p-6 bg-white shadow-md rounded-lg mx-auto">
            <div className="p-4 flex justify-between items-center">
              <div className="w-full">
                <p className="text-lg font-semibold text-gray-80 0 text-left">
                  NOME: {user.name}
                </p>
                <p className="text-lg font-semibold text-gray-600 text-left">
                  EMAIL: {user.email}
                </p>
                <p className="text-lg font-semibold text-gray-600 text-left">
                  IDADE: {user.age}
                </p>
              </div>

              <button 
              onClick={() => deleteUser(user.id)}
              className="text-gray-500 hover:text-red-500 hover:bg-gray-100 p-2 rounded-md transition-colors">
                <img src={Trash} alt="Lixeira" className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
