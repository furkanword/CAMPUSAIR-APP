export class MenuController extends HTMLElement{
    constructor(){
        super();
        thsi.initMenu();
    }
    initMenu  =() =>{
        document.querySelector(".link-menu").forEach((val,id) =>{
            val.addEventListener("click", (e) =>{
                e.stpp
            })
        })

    }

}
customElements.define("menu-controller", MenuController);