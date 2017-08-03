import React from 'react';
import TaskListItem from './task-list-item.js';

export default class TaskList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            style: {
                // Rendering.
                background:     '#ff0',
                listStyleType:  'none',

                // Font and text.
                fontSize:       '4vh',

                // Positioning.
                marginTop:      '0vh',
                marginRight:    '0vh',
                marginBottom:   '0vh',
                marginLeft:     '0vh',
                paddingTop:     '0vh',
                paddingRight:   '0vh',
                paddingBottom:  '0vh',
                paddingLeft:    '0vh'
            }
        };
    }

    componentDidMount()
    {
        console.log("TaskList mounted.");
    }

    componentWillUnmount()
    {
        console.log("TaskList will unmount.");
    }

    render()
    {
        // X should be a button component.
        return (
            <ul style={ this.state.style }>
                { this.props.tasks.map(function(task) {
                    return <TaskListItem key={ task.id } task={ task } />
                }) }
            </ul>
        );
    }
}
