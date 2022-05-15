

import { useEffect, useState } from 'react';
import { Button,FormControl,InputGroup,Modal } from 'react-bootstrap';

export default function Example({setGetMovies}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('')
    const [rate,setRate] = useState('')
    const [date,setDate] = useState('')
    const [imgUrl,setImgUrl] = useState('')
    const [description,setDescription] = useState('')
    const [category,setCategory] = useState('')
    const submitBtn = () => {
        setGetMovies({title,rate,description,imgUrl,date,category})
        handleClose()
    }
    
    
    return (
      <>
        <Button variant="outline-primary" onClick={handleShow}>
          Add New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Title"
                    aria-label="Title"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="rate"
                    aria-label="rate"
                    type="number"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setRate(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="date"
                    aria-label="date"
                    type="number"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setDate(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="imgUrl"
                    aria-label="imgUrl"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setImgUrl(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="description"
                    aria-label="description"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="category"
                    aria-label="category"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setCategory(e.target.value)}
                />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=> submitBtn()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }