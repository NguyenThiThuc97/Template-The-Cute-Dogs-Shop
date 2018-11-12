import React, {Component} from 'react'

class Product extends Component
{
	render(){
		return(
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
	              <tr>
	                <td>Mary</td>
	                <td>Moe</td>
	                <td>mary@example.com</td>
	                <td><button><i className="fas fa-edit"></i></button><button><i className="fas fa-trash"></i></button></td>
	              </tr>
	              <tr>
	                <td>July</td>
	                <td>Dooley</td>
	                <td>july@example.com</td>
	                <td><button><i className="fas fa-edit"></i></button><button><i className="fas fa-trash"></i></button></td>
	              </tr>
	            </tbody>
	          </table>
			)
	}
}
export default Product