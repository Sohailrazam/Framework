import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./blog.css";
export const Blog = () => {
  return (
    <Container className="themed-container" fluid={true}>

      <Row >
        <Col xs="5" >
          <Row style={{marginTop:'15px'}} >
            <Col xs="6" sm="4" >
              <div className="languages" style={{ color: "white" }}>
                <a style={{ textDecoration: "none", color: "white" }} href="/">
                  English
                </a>{" "}
                {"| "}
                <a style={{ textDecoration: "none", color: "white" }} href="/">
                  German
                </a>
              </div>
            </Col>
            <Col xs="6">
                <p style={{ color: "white",textAlign:'right' }}>
                <a style={{ fontSize:'30px', textDecoration: "none", color: "white" }} href="/">
                <img src='/add.svg' height="20px" width='15px' alt="add"/>
                </a>
                </p>
              </Col>
              
          </Row>
          <Row className="card-new-post">
            

            <Col  xs="5" >
            <p className="username-post" style={{fontSize:'14px'}}>
            Posted by &#x3c;username&#x3e;
            </p>
            </Col>
            <Col xs="7" >
            <i  className="fas fa-pencil-alt icon-blog" style={{color:'white'}}></i>
            <i  className="far fa-trash-alt icon-blog" style={{color:'white',padding:'13px'}}></i>
            {/* <p>{(new Date()).toDateString()}</p> */}
            <p className="dateset">Sunday, the 27th of december 2020
            <br/>
            {/* <code className="timeset" style={{color:"#babad8",}}> */}
              
              2:24 pm
              {/* </code> */}
              </p>
            </Col>
        
        <h6 style={{color:'#d2d2e3',paddingLeft:'25px'}}>Why framework matters? </h6>

  
        <p className="lead sub-head-style">
        Because the headline only needs  one line here is space to displ(...)

        </p>

            </Row>         
            
          
          <Row className="card-new-post2">
            
 
                  <Col  xs="5" >
                  <p className="username-post" style={{fontSize:'14px'}}>
                  Posted by &#x3c;username&#x3e;
                  </p>
                  </Col>
                  <Col xs="7" >
                  <i  className="fas fa-pencil-alt icon-blog" style={{color:'white'}}></i>
                  <i  className="far fa-trash-alt icon-blog" style={{color:'white',padding:'13px'}}></i>
                  {/* <p>{(new Date()).toDateString()}</p> */}
                  <p className="dateset">Sunday, the 27th of december 2020
                  <br/>
                  {/* <code className="timeset" style={{color:"#babad8",}}> */}
                    
                    2:24 pm
                    {/* </code> */}
                    </p>
                  </Col>
              
              <h6 style={{color:'#d2d2e3',paddingLeft:'25px'}}>This heading is a lot bigger than the one above - <br/> at this point the text breaks and continues in th(...)</h6>

                  </Row>

                  
            <Row className="card-new-post3">
            
            </Row> 
        </Col>
        <Col xs="7">
          <div style={{ color: "white" }}>
        <p className="content-blog" style={{textAlign:'right'}}>
          Do you like this project? - Support us with bitcoin!:)
          Address:bc1qfadktyn987w3968gngf90fol2m36u4arsspfjn
        </p>
          <div className="content-div-col2">
            <h5 style={{
              textAlign:'left',
              paddingLeft:'19px',
              marginBottom:'0',
              paddingTop:'13px'
            }}>
            Why framework matters ?
            </h5>
            <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
         
         
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
