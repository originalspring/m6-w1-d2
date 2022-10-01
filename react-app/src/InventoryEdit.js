import React, {Component} from 'react';
import AppNavbar from './Navbar';
import {Link, withRouter} from 'react-router-dom';
import {Button, ButtonGroup, Container, Table, Form, FormGroup, Input, Label} from "reactstrap";

class InventoryEdit extends Component{
  emptyInventory = {
    prodname:"",
    qty:"",
    price:"",
    status:""
  };

  constructor(props){
    super(props);
    this.state={
      item: this.emptyInventory
    };
  }

  async componentDidMount(){
    if(this.props.match.params.id !=='new'){
      const Inventory = 
        await (await fetch(`/api/inventory/${this.props.match.params.id}`)).json();
        this.setState({item:inventory});
    }
  }

  handleChange =(event) =>{
    const target = event.target;
    const value= target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name]=value;
    this.setState({item});
  }

  handleSubmit = async (event) =>{
    event.preventDefault();
    const {item}= this.state;

    await fetch(`/api/inventory`,{
      method:(item._id) ? 'PUT':'POST',
      headers:{
        'Accept':"application/json",
        'Content-Type':'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push(`/inventories`);
  }

  render(){
    const{item}= this.state;
    const title = 
    <h2>
      {item._id ? 'Edit Inventory':'Add Inventory'}
    </h2>;
    return(
      <div>
        <AppNavbar />
        <Container>
          {title}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label
                for="prodname"
                className='h5 mt-3'>Product Name</Label>
              <Input
               type="text"
               name="prodname"
               id='prodname'
               value={item.prodname || ''}
               onChange ={this.handleChange}
               autoComplete="prodname"
               ></Input>

            </FormGroup>
               <Label
                for="qty"
                className='h5 mt-3'>Quantity</Label>
              <Input
               type="text"
               name="qty"
               id='qty'
               value={item.prodname || ''}
               onChange ={this.handleChange}
               autoComplete="qty"
               ></Input>

            <FormGroup>
              <Label
                for="price"
                className='h5 mt-3'>Price</Label>
              <Input
               type="text"
               name="price"
               id='price'
               value={item.prodname || ''}
               onChange ={this.handleChange}
               autoComplete="price"
               ></Input>
            </FormGroup>

            <FormGroup>
              <Label
                for="price"
                className='h5 mt-3'>Status</Label>
              <Input
               type="text"
               name="status"
               id='status'
               value={item.prodname || ''}
               onChange ={this.handleChange}
               autoComplete="status"
               ></Input>
            </FormGroup>

            <FormGroup>
              <Button
              color="secondary"
              className="mt-3"
              type="submit">
              Save</Button>
              <Button 
               color="secondary"
              className="mt-3"
              tag={Link} to ="/inventories">Cancel</Button>
            </FormGroup>


            export default withRouter(InventoryEdit);








            <FormGroup></FormGroup>
          </Form>

        </Container>
      </div>
    )
  }











}