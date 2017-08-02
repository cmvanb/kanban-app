import React from 'react';

export default class TitleBar extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            titleBarStyle: {
                // Rendering.
                background: '#00f',

                // Font and text.
                'text-align': 'center',

                // Sizing.
                width: '100%',
                height: '8%'
            },
            titleStyle: {
                // Rendering.
                background: '#f00',

                // Font and text.
                'font-size': '4vh',

                // Positioning.
                display: 'inline-flex',
                'justify-content': 'space-between',
                float: 'none',
                margin: 'auto',
                padding: '1% 1% 1% 1%',

                // Sizing.
                width: 'auto'
            },
            buttonStyle: {
                // Rendering.
                background: '#0f0',

                // Font and text.
                'font-size': '4vh',

                // Positioning.
                float: 'right',
                padding: '1% 1% 1% 1%'
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
