import "@testing-library/jest-dom"
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from ".";
const buttonTestId = "button"
describe("Home", () => { 
    test("Verificando se o Button Cadastrar está renderizando", () => { 
        const {getByTestId} = render(<Home />)
        expect(getByTestId(buttonTestId)).toBeInTheDocument()
    })
})