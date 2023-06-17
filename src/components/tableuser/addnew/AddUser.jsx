import { useState } from 'react';
import {Button , Modal ,Form} from 'react-bootstrap';
import { AddNewUser } from '../../../api/userapi/UserApi';

function AddUser(props) {
    const {handleUpdeteTable , isEdit ,user} = props; 
    const [userEdit, setUserEdit] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setUserEdit(user);
        setShow(true);
    }
    const [userName, setUserName] = useState('');
    const [jobUser, setJobUser] = useState('');

    const handleSaveNew = async () => {
        const res = await AddNewUser(userName , jobUser);
        if(res && res.id && !isEdit){
            handleUpdeteTable({id: res.id , first_name: userName , last_name: jobUser , email: `${userName}@gmail.com`})
            setJobUser('');
            setUserName('')
            handleClose();
        }
        else{
            console.log(user);
        }
    }

  return (
    <>
      <button className={`btn mx-3 ${isEdit ? "btn-warning" : 'btn-success'}`} onClick={handleShow}>
      {isEdit ? 'Edit' : 'Add New '}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? 'Edit' : 'Add New '}
            
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Name" 
                        value={isEdit ? userEdit.first_name : userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Job</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Job" 
                        value={jobUser} 
                        onChange={(e) => setJobUser(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveNew}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUser;