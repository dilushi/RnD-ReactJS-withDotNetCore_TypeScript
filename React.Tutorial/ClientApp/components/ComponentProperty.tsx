import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface Props {
    name?: string;
}

export const ComponentProperty: React.SFC<Props> = (props: Props) => (<h4> Hello, { props.name }! </h4>);
ComponentProperty.defaultProps = {
    name: 'world',
};
//No render function