import React, {Component} from "react";
import Form from "./Form";
import {v7 as uuid} from 'uuid';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {name: 'Milk', qty: '2 gallons', id: uuid()},
                {name: 'Bread', qty: '2 loaves', id: uuid()},
            ]
        }
        this.renderItems = this.renderItems.bind(this)
        this.addItem = this.addItem.bind(this)
    }
    addItem(item){
        let newItem = {...item, id: uuid()};
        this.setState(state =>({
            items: [...state.items, newItem]
        }));
    }
    renderItems() {
        return (
            <ul>
                {this.state.items.map((item,index) => (
                    <li key={index}>
                        {item.name}: {item.qty}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <Form addItem={this.addItem}/>
            </div>
        )
    }
}

export default List;