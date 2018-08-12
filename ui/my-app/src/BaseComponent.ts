import {Component} from 'react'
import {Communication} from './Communication'

export class BaseComponent extends Component<any, any, any> {
    protected communication : Communication

    constructor (props:Readonly<any>){
        super(props)  
        this.state = {};
            
        this.communication = props.communication
    }

}