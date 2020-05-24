import React, { Component, CSSProperties } from 'react';

import S from '../../Style'

// Interfaces

interface Props {
    src : string
}
interface State {}

// Styles

let style = {
    root : {
        ...S.positioning.spaceVerticle
    } as CSSProperties,
    img : {
        width: 250
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
                <img style={style.img} src={this.props.src} />
            </div>
        ) 
    }

}