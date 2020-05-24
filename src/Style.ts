
let colors = {
    background1 : '#1e1e1e',
    background2 : '#41434c',

    text1: '#bac0ca',
    text2: '#e5e8ea',
    textHighlight: '#de3030',

    red: '#de3030',
}

export default {

    positioning : {

        pinLeft : ( width : number )  => ({
            position : 'absolute',
            left : 0, 
            top : 0, 
            height : '100%',
            width
        }),
        pinRight : ( width : string )  => ({
            position : 'absolute',
            right : 0, 
            top : 0, 
            height : '100%',
            width
        }),
        pinUpRight : ( width : string | number, height : string | number )  => ({
            position : 'absolute',
            right : 0, 
            top : 0, 
            height,
            width,
            textAlign: 'right',
        }),
        fill : {
            position : 'absolute',
            left : 0, 
            top : 0, 
            height : '100%',
            width : '100%'
        },

        spaceVerticle : {
            marginTop: 5,
            marginBottom: 5,
            paddingTop: 15,
            paddingBottom: 15,
        },

        inlinePadded : {
            display: 'inline-block',
            marginRight: 10,
            marginLeft: 10,
        },

        absolute : (top: number, left: number, height: number, width: number ) => ({
            top, left, height, width,
            position: 'absolute'
        })


    },


    design : {

        // Divs

        solidDark1 : {
            background : colors.background1
        },
        solidDark2 : {
            background : colors.background2
        },

        // Text

        textDark1: {
            color : colors.text1,
            letterSpacing: 2,
        },
        textDark2: {
            color : colors.text2,
            letterSpacing: 2,
        },
        bold: {
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: 10,
        },
        activeText: {
            color: colors.textHighlight,
        },

        // Special 

        accentLeftBorder : {
            borderLeft : `2px solid ${colors.red}`
        },
        plainLeftBorder : {
            borderLeft : `2px solid transparent`
        },
        highlight : {
            background : colors.background2
        }


    }


}