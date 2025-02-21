import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
import "./cardList.css";

export class CardList extends DivComponent {
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }
    render() {
        if (this.parentState.loading) {
            this.el.innerHTML = `
                <div>Loading...</div>
            `
            return this.el
        }
        this.el.innerHTML = `
            <h1>Number of books - ${this.parentState.list.length}</h1>
        `
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card__grid')
        this.el.append(cardGrid)
        for (const card of this.parentState.list) {
            cardGrid.append(new Card(this.appState, card).render())
        }

        return this.el
    }
}