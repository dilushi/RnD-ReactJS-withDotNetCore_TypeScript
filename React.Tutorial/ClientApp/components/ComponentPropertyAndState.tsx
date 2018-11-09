import * as React from 'react';

interface Props {
    incrementBy? : number;
}

interface State {
    count: number;
}

export class ComponentPropertyAndState extends React.Component<Props, State>{

    //Default property set for countBy
    public static defaultProps: Partial<Props> = { incrementBy: 1 };

    State: State = { count: 0 };
    
    increment = () => {
        const incrementBy : number = this.props.incrementBy!;
        const count = this.state.count + incrementBy;
        this.setState({
            count
        });
    }

    render() {
        return (
            <div>
                <p> 
                    Demonstration of properties,
                    default value of properties And State of component Current State -> count is
                    <h2> { this.state.count } </h2>
                </p>
                <button onClick = { this.increment }>
                    Increase the count by number specified as property incrementBy: {this.props.incrementBy}
                </button>
            </div>);  
        }
}