import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
class RecentBookList extends Component 
{
       render()
    {
        return <table className="table table-dark">
            <thead className="thead-dark">
                <tr>
                       <th>Book Name</th>
                       <th>Book Author</th>
                </tr>
            </thead>
            <tbody>
                {this.props.bookList.map(book => {
                    return <tr>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td> <button onClick={this.props.remove.bind(this, book.name)}>Delete</button></td>
                    </tr>
                })}
            <Link to='/form'><Button variant='primary' size='lg'>Add</Button></Link>
            </tbody>
        </table>
    }
}

export default RecentBookList;
