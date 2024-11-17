import PropTypes from 'prop-types'

import Trash from "../../assets/lixeira.svg";
import Edit from "../../assets/editar.svg"
export default function Card({users, deleteUser, handleEdit}){ 
    return ( 
        <> 
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
                <img src={Trash} alt="Lixeira" className="w-10 h-10" />
              </button>

              <button
                  onClick={() => handleEdit(user)}
                  className="text-gray-500 hover:text-blue-500 hover:bg-gray-100 p-2 rounded-md transition-colors"
                  aria-label={`Editar usuário ${user.name}`}
                >
                <img src={Edit} alt="editar" className='w-10 h-10'/>
                </button>
            </div>
          </div>
        </div>
      ))}
    </>
    )
}

Card.propTypes = { 
    users: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired, 
    handleEdit: PropTypes.func.isRequired,
}