import { Component } from "react";
import CardComponent from "../CardComponent/CardComponent";
import './CardList.css'

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return(
            <div className="card-list">
                {monsters.map((monsters) => {
                    return(
                        <CardComponent monsters = { monsters } />
                    )
                })}
            </div>
        )
    }
}

export default CardList;