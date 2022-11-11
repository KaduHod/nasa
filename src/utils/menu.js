let HamburguerMenu = class HamburguerMenu
{
    constructor({htmlElement, targetContainer, closeContainer}){
        this.hamburguer = htmlElement
        this.targetContainer = targetContainer
        this.isHidden = true;
        this.closeContainer = closeContainer
        this.setEvents();
    }

    /**
     * Seta evento on click
     */
    setEvents()
    {
        this.hamburguer.addEventListener('click', this.handler)
        this.closeContainer.addEventListener('click', this.handler)
    }

    handler = (e) =>
    {
        if(this.isHidden) this.showMenu()
        else this.hideMenu()
    }

    showMenu()
    {
        this.isHidden = false
        this.targetContainer.classList.remove('-translate-y-full') 
    }

    hideMenu()
    {
        this.isHidden = true
        this.targetContainer.classList.add('-translate-y-full') 
    }

    getState()
    {
        return !!this.hamburguer.dataset.isHidden
    }
}

const hamburguerMenuDecorator = (HamburguerMenuClass) => {
    return (...params) => {
        let instance = new HamburguerMenuClass(...params);
        return new Proxy(instance, {
            get(target, prop){
                if(prop == 'isHidden') return target.getState();
                return target[prop]
            },
            set(target, prop){
                return target[prop]
            }
        });
    }
} 


HamburguerMenu = hamburguerMenuDecorator(HamburguerMenu)

export {
    HamburguerMenu
}
