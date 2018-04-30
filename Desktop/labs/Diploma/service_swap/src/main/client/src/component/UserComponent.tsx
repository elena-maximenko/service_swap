import * as React from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

import { Link } from 'react-router-dom';

class UserComponent extends React.Component<{}, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: false,
            users: []
        };
    }

    public componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/users')
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
                                        <button className="glyphicon-button">
                                            <a> <i className="fas fa-pencil-alt"/></a>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="glyphicon-button-delete" data-style="color: red">
                                            <Link to={`/delete-user/${user.id}`}><i className="fas fa-trash-alt"/></Link>
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