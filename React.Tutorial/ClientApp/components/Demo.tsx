import * as React from 'react';
import { RouteComponentProps } from 'react-router';

//export class Demo extends React.Component<any, any>  == export line at the end
export class Demo extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {
        return (
            <div className="Demo">
                <p>React demo...</p>
            </div>
        )
    }
}

//export default Demo;