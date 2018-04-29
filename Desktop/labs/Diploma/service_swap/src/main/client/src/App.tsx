import * as React from 'react';
import './App.css';

class App extends React.Component<{}, any>{
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
        <div className="App">
            <div>
                <h2>Users</h2>
                {users.map((user: any) =>
                    <div key={user.id}>
                        {user.firstName} {user.lastName}
                    </div>
                )}
            </div>
        </div>
    );
  }
}

export default App;
