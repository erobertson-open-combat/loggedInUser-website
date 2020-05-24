import React, { Component, CSSProperties } from 'react';

import S from '../../Style'

// Interfaces

interface Props {
    text: string,
    active: boolean,
    click: () => void,
    icon: Element
}
interface State {
    hover : boolean
}

// Styles

let style = {
    root ( hover : boolean, active : boolean ) : CSSProperties {
        let _ : CSSProperties = {
            position: "relative",
            paddingLeft: 60,
            ...S.design.textDark1,
            ...S.positioning.spaceVerticle,
            ...S.design.plainLeftBorder,
        }
        let _hover = {
            cursor: 'pointer',
            ...S.design.highlight
        }
        let _active = {
            ...S.design.highlight,
            ...S.design.accentLeftBorder,
            ...S.design.activeText
        }
        return active ? {..._, ..._active} : hover ? {..._, ..._hover} : _ 
    },
    icon : {
        ... S.positioning.absolute(15,27,40,40)
    } as CSSProperties
}


export default class extends Component<Props,State> {

    // Setup

    constructor (public props : Props) {
        super( props );
        this.state = { hover : false }
    }

    // Actions

    setHover = ( hover : boolean ) => () => {
        this.setState({ hover })
    }

    // Rendering

    render () {
        return (
            <div 
                style={style.root(this.state.hover, this.props.active)} 
                onMouseEnter={this.setHover(true)} 
                onMouseLeave={this.setHover(false)}
                onClick={this.props.click}>
                    <div style={style.icon}>
                        {this.props.icon}
                    </div>
                    {this.props.text}
            </div>
        ) 
    }

}