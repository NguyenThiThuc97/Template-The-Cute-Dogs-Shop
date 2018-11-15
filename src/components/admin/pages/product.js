import React, {Component} from 'react'
import Popup from "reactjs-popup"
import Modal from 'react-awesome-modal';

class Product extends Component
{
	constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
	render(){
		return(
			<div>
				<button onClick={() => this.openModal()}><i class="fas fa-plus-circle"></i> Create</button>
				<table className="table">
		            <thead>
		              <tr>
		                <th>Product Name</th>
		                <th>Alias</th>
		                <th>Category</th>
		                <th>Image</th>
		              </tr>
		            </thead>
		            <tbody>
		              <tr>
		                <td>John</td>
		                <td>Doe</td>
		                <td>john@example.com</td>
		                <td><button><i className="fas fa-edit"></i></button><button><i className="fas fa-trash"></i></button></td>
		              </tr>
		            </tbody>
		        </table>
		        <Modal 
                    visible={this.state.visible}
                    // width="400"
                    // height="300"
                    // effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
				        <form>
				        	<div className="form-group">
					          	<label htmlFor="inputAddress"> Name</label>
					          	<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
					        </div>
					        <div className="form-group">
					          	<label htmlFor="inputAddress2"> Alias</label>
					          	<input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
					        </div>
					        <div className="form-group">
					            <label htmlFor="inputState">Company</label>
					            <select id="inputState" className="form-control">
					              <option selected>Choose...</option>
					              <option>...</option>
					            </select>
					        </div>
					        <div className="form-group">
					            <label htmlFor="inputState">Category</label>
					            <select id="inputState" className="form-control">
					              <option selected>Choose...</option>
					              <option>...</option>
					            </select>
					        </div>
					        <div className="form-group">
					            <label htmlFor="inputState">Description</label>
					          	<input type="textarea" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
					        </div>
					        <div className="form-group">
					            <label htmlFor="inputState">Image</label>
					          	<input type="file" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
					            
					        </div>
					        <button type="submit" className="btn btn-primary">Save</button>
				        </form>
                </Modal>
			</div>
			)
	}
}
export default Product