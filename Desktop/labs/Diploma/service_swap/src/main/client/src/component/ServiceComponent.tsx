import * as React from "react";

class ServiceComponent extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: false,
            services: []
        };

        //  this.deleteService = this.deleteService.bind(this);
    }

    public componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/services')
            .then(response => response.json())
            .then(data => this.setState({services: data, isLoading: false}));
    }

    public deleteService(id: number) {
        fetch('http://localhost:8080/delete-service/' + id, {
            headers: {
                'Accept': 'application/json, text/plain',
            },
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => this.setState({services: data, isLoading: false}));
    }

    public render() {
        const {isLoading, services} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
        <th>Category</th>
        <th/>
        <th/>
        </tr>
        </thead>
        {services.map((service: any) =>
            <tr key={service.id}>
            <td>
                {service.name}
            </td>
            <td>
            {service.category.name}
            </td>
            <td>
            {service.login}
            </td>
            <td>
            <button className="glyphicon-button-delete" onClick={this.deleteService.bind(this, service.id)}>
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
export default ServiceComponent;