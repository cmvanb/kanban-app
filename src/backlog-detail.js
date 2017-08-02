import React from 'react';
import TitleBar from './title-bar.js';

export default class BacklogDetail extends React.Component
{
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
            <TitleBar title="Backlog Detail" closable={true}/>
        );
    }
}
