import React from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';
import './framework.css'
import {Link} from 'react-router-dom'

export const Framework = () => {
    return (
      <Container className="themed-container" fluid={true}>
      <Jumbotron>
        <h1 className="display-4 head_med_framework">Welcome to <code style={{color:'yellow'}}>framework</code></h1>
        
        <h4 className="style_head_two_med" style={{display:'inline',margin:'9px'}}>Do you already have an account?</h4>
        
        <p className="lead" style={{display:'inline'}}>
        <Button className="styleTryitbuttmed" color="warning">Try it out!</Button>{'or'}
        <Link className="stylebuttlogin btn btn-outline-secondary" to="/login">
        {/* <Button style={{textDecoration:'none'}} className="stylebuttlogin" outline color="secondary">Login</Button> */}
        Login
        </Link>
        </p>
      </Jumbotron>
      </Container>
      )
}
