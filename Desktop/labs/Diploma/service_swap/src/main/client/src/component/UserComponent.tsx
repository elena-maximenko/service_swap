import * as React from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

class UserComponent extends React.Component<{}, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: false,
            users: []
        };

        this.deleteUser = this.deleteUser.bind(this);
    }

    public componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(data => this.setState({users: data, isLoading: false}));
    }

    public deleteUser(id:number) {
        window.console.log('hjnk');
        fetch('http://localhost:8080/delete-user/'+id, {
            headers: {
                'Accept': 'application/json, text/plain',
            },
            method: 'POST'})
            .then(response => response.json())
            .then(data => this.setState({users: data, isLoading: false}));
    }

    public render() {
        const {isLoading, users} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
                <div>
                    <div className="container">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th/>
                                <th/>
                            </tr>
                            </thead>
                            {users.map((user: any) =>
                                <tr key={user.id}>
                                    <td>
                                        {user.firstName}
                                    </td>
                                    <td>
                                        {user.lastName}
                                    </td>
                                    <td>
                                        {user.login}
                                    </td>
                                    <td>
                                        <button className="glyphicon-button-delete" onClick={this.deleteUser.bind(this, user.id)}>
                                            <i className="fas fa-trash-alt"/>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
        );
    }
}

export default UserComponent;