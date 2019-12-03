import React,{Component} from  'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default class AddBooks extends Component{
    abc = (event) =>{
        event.preventDefault()
        const name=event.target.name.value
        const author = event.target.author.value
        const post ={
            name : name,
            author : author,
        }
       
        this.props.add(post)
    }
render(){
    return (
        <Form onSubmit={this.abc}>
  <Form.Group>
    <Form.Label>Book Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Book Name" id='name' />
  </Form.Group>

  <Form.Group>
    <Form.Label>Book Author</Form.Label>
    <Form.Control type="text" placeholder="Enter Book Author" id='author'/>
  </Form.Group><Button variant='primary' type="submit" size='lg'>Submit</Button>
</Form>
    )
}    
}
