import React from "react";
import axios from "axios";
import { Button, Row, Col } from "react-bootstrap";
import { GoMail } from 'react-icons/go'

const App = () => {
  const {email, setEmail} = React.useState('');
  const {affair, setAffair} = React.useState('');
  const {message, setMessage} = React.useState('');

  const handleEmailChange = (event) => {
    const target = event.target;
    const { value } = target;
    setEmail(value);
  }

  const handleAffairChange = (event) => {
    const target = event.target.value;
    setAffair(target);
  }

  const handleMessageChange = (event) => {
    const target = event.target.value;
    setMessage(target);
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await axios.post('api url', {
        email,
        affair,
        message
      })
    } catch (error) {
      alert(error)
    }
  }

    return(
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={10} lg={8} xl={6}>
          <div
          className="container bg-light border border-gray shadow rounded"
          style={{ maxWidth: '90%', marginLeft: '5%', marginTop: '5%'}}
          >
          <div className="justify-content-center m-2">
          <h2> Enviador de mails <GoMail/></h2>
          <hr/>
          <form className="form-inline">
            <div className="mt-1">
              <label>Email</label>
              <br/>
              <input 
                type="email"
                className="form-control"
                name="email"
                onChange={handleEmailChange}
              />
            </div>
            <div className='mt-1'>
              <label>Asunto</label>
              <br/>
              <input 
                type="text"
                className="form-control"
                name="affair"
                onChange={handleAffairChange}
              />
            </div>
            <div className='mt-1'>
              <label>Mensaje</label>
              <br/>
              <textarea 
                className="form-control"
                name="message"
                onChange={handleMessageChange}
              />
            </div>
            <Button
            type="submit"
            variant="success"
            className="my-2" 
            style={{width: '100%'}}>     
              Enviar 
            </Button>
          </form>
          </div>
          </div>
        </Col>
      </Row>
    )
}

export default App;
