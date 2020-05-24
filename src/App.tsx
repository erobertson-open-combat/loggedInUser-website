import React, { Component, CSSProperties } from 'react';

import S from './Style'
import NavSection from './components/navbar/NavSection';
import NavHeader from './components/navbar/NavHeader';
import NavOption from './components/navbar/NavOption';
import Ranked from './components/ranked/Ranked';

import { FaFistRaised, FaUserShield, FaHammer, FaTruckLoading, FaDungeon, FaStore, FaShapes, FaCog } from 'react-icons/fa';
import AccountIndicator from './components/accountIndicator/AccountIndicator';

// Interfaces
interface Props {}
interface State {
    view : string
}

// Styles

let style = {
    root : {
        ...S.positioning.fill,
        ...S.design.solidDark2,
    } as CSSProperties,
    navbar : {
        ...S.positioning.pinLeft(250),
        ...S.design.solidDark1,
    } as CSSProperties,
    main : {
        ...S.positioning.pinRight('calc(100% - 250px)')
    } as CSSProperties,
}


export default class extends Component<Props,State> {

    // Setup

    constructor (public props : Props) {
        super( props );
        this.state = { view : 'Ranked' }
    }

    // Change View

    changeView = ( view : string ) => () => {
        this.setState( {view} )
    }

    // Rendering

    getMainView () {
        if ( this.state.view === 'Ranked' ) return <Ranked />
        return <div></div>
    }

    render () {

        let icons : any = {
            fist : <FaFistRaised size={22} />,
            hammer : <FaHammer size={22} />,
            load : <FaTruckLoading size={22} />,
            shield : <FaUserShield size={22}  />,
            guild: <FaDungeon size={22} />,
            market: <FaStore size={22} />,
            shapes: <FaShapes size={22} />,
            cog: <FaCog size={22} />,

        }

        return (
            <div style={style.root}>

                <AccountIndicator name={'test'} />

                <div style={style.navbar}>
                    <NavHeader src='logo2.png' />
                    <NavSection text='play' />
                    <NavOption text='Ranked' active={this.state.view=='Ranked'} click={this.changeView('Ranked')} icon={icons.fist} />
                    <NavOption text='Private' active={this.state.view=='Private'} click={this.changeView('Private')} icon={icons.shield} />
                    <NavSection text='create' />
                    <NavOption text='Abilities' active={this.state.view=='Abilities'} click={this.changeView('Abilities')} icon={icons.hammer} />
                    <NavOption text='Loadout' active={this.state.view=='Loadout'} click={this.changeView('Loadout')} icon={icons.load} />
                    <NavSection text='social' />
                    <NavOption text='Guild' active={this.state.view=='Guild'} click={this.changeView('Guild')} icon={icons.guild} />
                    <NavOption text='Showcase' active={this.state.view=='Showcase'} click={this.changeView('Showcase')} icon={icons.market} />
                    <NavSection text='game' />
                    <NavOption text='Shop' active={this.state.view=='Shop'} click={this.changeView('Shop')} icon={icons.shapes} />
                    <NavOption text='Settings' active={this.state.view=='Settings'} click={this.changeView('Settings')} icon={icons.cog} />

                </div>

                <div style={style.main}>
                    { this.getMainView() }
                </div>

            </div>
        ) 
    }

}