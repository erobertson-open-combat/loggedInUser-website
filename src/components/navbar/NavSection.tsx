import React, { Component, CSSProperties } from 'react';

import S from '../../Style'

// Interfaces

interface Props {
    text: string
}
interface State {}

// Styles

let style = {
    root : {
        paddingLeft: 30,
        paddingTop: 30,
        ...S.design.textDark2,
        ...S.design.bold
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
                {this.props.text}
            </div>
        ) 
    }

}