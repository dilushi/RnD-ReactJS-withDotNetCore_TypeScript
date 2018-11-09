import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class StaticText extends React.Component<{}, {}>
{
    public render()
    {
        return <div>Hello world</div>;
    }
}