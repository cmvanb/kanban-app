import React from 'react';
import BacklogDetail from './backlog-detail.js';

export default class KanbanApp extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            page: <BacklogDetail />
        };
    }

    componentDidMount()
    {
        console.log("KanbanApp mounted.");
    }

    componentWillUnmount()
    {
        console.log("KanbanApp will unmount.");
    }

    render()
    {
        return (
            <div className="kanban-app">
                <h1>Kanban App</h1>
                {this.state.page}
            </div>
        );
    }
}
