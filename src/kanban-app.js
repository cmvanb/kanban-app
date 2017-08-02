import React from 'react';
import BacklogDetail from './backlog-detail.js';

export default class KanbanApp extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            page: <BacklogDetail />,
            style: {
                margin: 0,
                padding: 0,
                height: '100%',
                width: '100%',
                background: '#999'
            }
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
            <div className="kanban-app" style={ this.state.style }>
                {this.state.page}
            </div>
        );
    }
}
