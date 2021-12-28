import React from "react";
import './cardlist.styled.css'
import { Card } from "../card/card.component";

export const Cardlist = props => (
    <div className="card-list">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/> 
            ))}
    </div>
);