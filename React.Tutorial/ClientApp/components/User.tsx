import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface UsersState {
    userList: UserList[];
    loading: boolean;
}

export class User extends React.Component<RouteComponentProps<{}>, UsersState> {
    constructor() {
        super();
        this.state = { userList: [], loading: true };

        fetch('api/SampleUserData/Users')
            .then(response => response.json() as Promise<UserList[]>)
            .then(data => {
                this.setState({ userList: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : User.renderUsersTable(this.state.userList);

        return <div>
            <h1>Users</h1>
            <p>Fetching data from an api.</p>
            {contents}
        </div>;
    }

    private static renderUsersTable(userList: UserList[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Roles</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {userList.map(user =>
                    <tr key={user.userName}>
                        <td>{user.userName}</td>
                        <td>{user.firstName}</td>
                        <td>{user.roles}</td>
                        <td>{user.actions}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

interface UserList {
    userName : string;
    firstName: string;
    roles: string;
    actions: string;
}