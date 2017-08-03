import React from 'react';

export default class TitleBar extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            titleBarStyle: {
                // Rendering.
                background:     '#ccc',

                // Sizing.
                width:          '100vw',
                height:         '7.91vh'
            },
            titleStyle: {
                // Font and text.
                fontSize:       '4vh',
                fontWeight:     'bold',
                textAlign:      'center',

                // Positioning.
                display:        'table',
                float:          'left',
                paddingTop:     '1.6vh',
                paddingRight:   '1vh',
                paddingBottom:  '0.4vh',
                paddingLeft:    '1vh',

                // Sizing.
                width:          'calc(100vw - 10vh)',
                height:         '6vh'
            },
            buttonStyle: {
                // Rendering.
                background:     '#f00',
                borderRadius:   '50%',

                // Font and text.
                fontSize:       '4vh',
                fontWeight:     'bold',
                textAlign:      'center',

                // Positioning.
                display:        'table-cell',
                float:          'right',
                marginTop:      '1vh',
                marginRight:    '1vh',
                marginBottom:   '1vh',
                marginLeft:     '1vh',
                paddingTop:     '1vh',
                paddingRight:   '1vh',
                paddingBottom:  '1vh',
                paddingLeft:    '1vh',

                // Sizing.
                width:          '4vh',
                height:         '4vh'
            }
        };
    }

    componentDidMount()
    {
        console.log("TitleBar mounted.");
    }

    componentWillUnmount()
    {
        console.log("TitleBar will unmount.");
    }

    render()
    {
        // X should be a button component.
        return (
            <div style={ this.state.titleBarStyle }>
                <div style={ this.state.titleStyle }>{ this.props.title }</div>
                { this.props.closable &&
                    <div style={ this.state.buttonStyle }>X</div> }
            </div>
        );
    }
}
