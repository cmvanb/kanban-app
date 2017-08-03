import React from 'react';

export default class TaskListItem extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            style: {
                // Rendering.
                background:     '#eee',

                // Border.
                borderTop:      '0vh',
                borderRight:    '0vh',
                borderBottom:   '1vh',
                borderLeft:     '0vh',
                borderColor:    '#ddd',
                borderStyle:    'solid',

                // Positioning.
                marginTop:      '0vh',
                marginRight:    '0vh',
                marginBottom:   '0vh',
                marginLeft:     '0vh',
                paddingTop:     '1vh',
                paddingRight:   '1vh',
                paddingBottom:  '1vh',
                paddingLeft:    '1vh'
            }
        };
    }

    componentDidMount()
    {
        console.log("TaskListItem mounted.");
    }

    componentWillUnmount()
    {
        console.log("TaskListItem will unmount.");
    }

    render()
    {
        // X should be a button component.
        return (
            <li style={ this.state.style }>
                { this.props.task.text }
            </li>
        );
    }
}
