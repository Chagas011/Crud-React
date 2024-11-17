import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import App from "./App"



// Testando se o App está renderizando
describe("App", () => { 
    test("Verificando a renderização do Componente", () => { 
        const {getByText} = render(<App />)


        expect(getByText("Cadastro de Usuários")).toBeInTheDocument()
    })
})
