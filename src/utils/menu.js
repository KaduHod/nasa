let HamburguerMenu = class HamburguerMenu
{
    constructor({htmlElement, targetContainer}){
        this.hamburguer = htmlElement
        this.targetContainer = targetContainer
        this.isHidden = this.getState();
        this.setEvents();
    }

    /**
     * Seta evento on click
     */
    setEvents()
    {
        this.hamburguer.addEventListener('click', this.handler)
    }

    handler = (e) =>
    {
        if(this.hamburguer.dataset.isHidden) this.showMenu()
        else this.hideMenu()
        console.log(this.isHidden)
    }

    showMenu()
    {
        this.hamburguer.dataset.isHidden = '0'
        console.log('show', this)
    }

    hideMenu()
    {
        this.hamburguer.dataset.isHidden = '1'
        console.log('hide', this.hamburguer.dataset.isHidden)
    }

    getState()
    {
        console.log(this.hamburguer.dataset.isHidden)
        return !!this.hamburguer.dataset.isHidden
    }
}

const hamburguerMenuDecorator = (HamburguerMenuClass) => {
    return (...params) => {
        return new HamburguerMenuClass(...params)
    }
} 


HamburguerMenu = hamburguerMenuDecorator(HamburguerMenu)

export {
    HamburguerMenu
}
