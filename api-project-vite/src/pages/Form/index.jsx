import PropTypes from 'prop-types'

export default function Form({inputName, inputEmail, inputAge, handleSubmit}) { 

    return( 
        <form onSubmit={handleSubmit}>
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
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cadastrar
            </button>
          </form>
    )

}


Form.propTypes = { 
    inputName: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
    inputEmail: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
    inputAge: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
    handleSubmit: PropTypes.func.isRequired
  };