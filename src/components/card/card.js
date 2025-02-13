import { DivComponent } from "../../common/div-component";
import "./card.css";

export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    #addToFavorites() {
        this.appState.favorites.push(this.cardState)
    }

    #deleteFromFavorites() {
        this.appState.favorites = this.appState.favorites.filter(
            b => b.key !== this.cardState.key
        )
    }
 
    render() {
        const existInFavorite = this.appState.favorites.find(
            b => b.key == this.cardState.key
        )

        this.el.classList.add('card');
        this.el.innerHTML = `
            <div class='card__image'>
                <img src='https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg' alt='cover'/>
            </div>
            <div class='card__info'>
                <div class='card__tag'>
                    ${this.cardState.subject ? this.cardState.subject[0] : 'Не задано'}
                </div>
                <div class='card__title'>
                    ${this.cardState.title}
                </div>
                <div class='author'>
                    ${this.cardState.author_name ? this.cardState.author_name[0] : 'Не задано'}
                </div>
                <div class='card__footer'>
                <button class='card__button ${existInFavorite ? 'card__favorite' : ''}'>
                    ${existInFavorite
                        ? '<img src="/static/favorite.svg" />'
                        : '<img src="/static/favorite__white.svg" />'
                    }
                </button>
            </div>
            </div>
            

        `
        if (existInFavorite) {
            this.el
                .querySelector('button')
                .addEventListener('click', this.#deleteFromFavorites.bind(this))
        } else { 
            this.el
                .querySelector('button')
                .addEventListener('click', this.#addToFavorites.bind(this))
        }
        return this.el
    }
}