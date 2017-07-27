import React from 'react';

export default class TitleBar extends React.Component
{
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
            <div>
            <h2>{ this.props.title }</h2>
            { this.props.closable &&
                <h2>X</h2> }
            </div>
        );
    }
}
