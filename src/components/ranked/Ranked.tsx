import React, { Component, CSSProperties } from 'react';

import S from '../../Style'

// Interfaces

interface Props {}
interface State {}

// Styles

let style = {
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
            <div>
                Ranked
            </div>
        ) 
    }

}