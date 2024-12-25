import { DivComponent } from "../../common/div-component";
import "./header.css";

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src='/static/b.png' alt='Logo' width='40px'>
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src='/static/search.svg' alt='Logo' width="15px">
                    Search books
                </a>
                <a class="menu__item" href="#favorites">
                    <img src='/static/favorite.svg' alt='Logo' height="15px">
                    Favorites
                </a>
                <div class="menu__counter">
                    ${this.appState.favorites.length}
                </div>
            </div>
        `
        return this.el
        
    }
}