import * as React from "react";

class CategoryComponent extends React.Component<{}, any> {
    constructor(props: any) {
        window.console.log('11');

        super(props);

        this.state = {
            categories: [],
            isLoading: false
        };
    }

    public componentDidMount() {
        this.setState({isLoading: true});

        window.console.log('cfgvbh');

        fetch('http://localhost:8080/categories')
            .then(response => response.json())
            .then(data => this.setState({categories: data, isLoading: false}));

        this.deleteCategory = this.deleteCategory.bind(this);
    }

    public deleteCategory(id:number) {
        window.console.log('hjnk');
        fetch('http://localhost:8080/delete-category/'+id, {
            headers: {
                'Accept': 'application/json, text/plain',
            },
            method: 'POST'})
            .then(response => response.json())
            .then(data => this.setState({categories: data, isLoading: false}));
    }

    public render() {
        const {isLoading, categories} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th/>
                            <th/>
                        </tr>
                        </thead>
                        {categories.map((category: any) =>
                            <tr key={category.id}>
                                <td>
                                    {category.id}
                                </td>
                                <td>
                                    {category.name}
                                </td>
                                <td>
                                    <button className="glyphicon-button">
                                        <a> <i className="fas fa-pencil-alt"/></a>
                                    </button>
                                </td>
                                <td>
                                    <button className="glyphicon-button-delete" onClick={this.deleteCategory.bind(this, category.id)}>
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

export default CategoryComponent;