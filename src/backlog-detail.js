import React from 'react';
import TaskList from './task-list.js';
import TitleBar from './title-bar.js';

export default class BacklogDetail extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            tasks: [
                {
                    id: '0001',
                    text: 'Task 1'
                },
                {
                    id: '0002',
                    text: 'Task 2'
                },
                {
                    id: '0003',
                    text: 'Task 3'
                },
                {
                    id: '0004',
                    text: 'Task 4'
                },
                {
                    id: '0005',
                    text: 'Task 5'
                }
            ]
        };
    }

    componentDidMount()
    {
        console.log("BacklogDetail mounted.");
    }

    componentWillUnmount()
    {
        console.log("BacklogDetail will unmount.");
    }

    render()
    {
        return (
            <div>
            <TitleBar title="Backlog Detail" closable={true}/>
            <TaskList tasks={ this.state.tasks }/>
            </div>
        );
    }
}
