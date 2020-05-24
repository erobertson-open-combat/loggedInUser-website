import React, { Component, CSSProperties } from 'react';

import S from '../../Style'

// Interfaces

interface Props { name : string}
interface State {}

// Styles

let style = {
    root : {
        ...S.positioning.pinUpRight(200, 100),
        marginRight: 10,
    } as CSSProperties
}


export default class extends Component<Props,State> {

    // Setup

    constructor (public props : Props) {
        super( props );
        this.state = {}
    }

    // Actions

    // Rendering

    render () {
        return (
            <div style={style.root}>
                Logged in as: {this.props.name}
            </div>
        ) 
    }

}