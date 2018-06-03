import * as React from "react";

import CategoryModal from "./CategoryModal";

import {Button} from "react-bootstrap";
import EditCategoryModal from "./EditCategoryComponent";

import {Sorter} from "../util/Sorter";

class CategoryComponent extends React.Component<{}, any> {
    private asc = true;
    private sorter = new Sorter();

    constructor(props: any) {
        super(props);

        this.state = {
            categories: [],
            editedCategoryId: Number,
            isLoading: false,
            showEdit: false,
            showPopup: false
        };

        this.sort = this.sort.bind(this);
    }

    public togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    public showEdit(id:number) {
        this.setState({editedCategoryId: id});
        this.setState({
            showEdit: !this.state.showEdit
        });
    }

    public componentDidMount() {
        this.setState({isLoading: true});

        window.console.log('cfgvbh');

        fetch('http://localhost:8080/categories')
            .then(response => response.json())
            .then(data => this.setState({categories: data, isLoading: false}));

        this.deleteCategory = this.deleteCategory.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
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

    public sort(){
        this.setState({categories: this.sorter.sortByKey(this.state.categories, 'name', this.asc)});
        this.asc = (this.asc === true)?false:true;
    }

    public render() {
        const {isLoading, categories} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <div className="container">
                    <Button className='btn btn-primary cntr' onClick={this.togglePopup}><i className='fas fa-plus'/></Button>

                    <table className="table table-striped">
                        <i onClick={this.sort} className="fas fa-sort"/>
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
                                    <button className="glyphicon-button" onClick={this.showEdit.bind(this, category.id)}>
                                        <i className="fas fa-pencil-alt"/>
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
                {this.state.showPopup ?
                    <CategoryModal categoryComponent={this}
                        closePopup={this.togglePopup}
                    />
                    : null
                }
                {this.state.showEdit ?
                    <EditCategoryModal categoryComponent={this}
                                   closePopup={this.togglePopup} id = {this.state.editedCategoryId}
                    />
                    : null
                }
            </div>
        );
    }
}

export default CategoryComponent;