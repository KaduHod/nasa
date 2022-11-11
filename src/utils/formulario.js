/**
 * Classe formulario para facilitar codigos com formularios
 */
let formulario = class Formulario
{
    constructor({htmlElement})
    {
        this.container = htmlElement ?? null
        this.container.addEventListener('submit', e => e.preventDefault())
    }

    /**
     * @returns Array de inputs do formulario
     */
    getFields()
    {
        return [
            ...this.container.getElementsByTagName('input'),
            ...this.container.getElementsByTagName('select'),
            ...this.container.getElementsByTagName('text-area'),
        ]
    }

    /**
     * @returns Objeto com inputs
     */
    getValues()
    {
        return this.getFields().reduce((acc, {name, value}) => {
            if(!value) return acc;
            acc[name] = value
            return acc;
        },{})
    }

    /**
     * @returns Botoes e links do fomrulario
     */
    getButtons()
    {
        return [
            ...this.container.getElementsByTagName('button'),
            ...this.container.getElementsByTagName('a')
        ]
    }

    /**
     * @param {*} filter 
     * @returns 
     */
    getButtonsBy(key, value)
    {
        return this.getButtons().find(button => button[key] === value);
    }
}

const formularioDecorator = (formulario) => {
    /**
     * Logica
     */
    return (...params) => {
        return new formulario(...params)
    }
}

formulario = formularioDecorator(formulario);

export {
    formulario
}