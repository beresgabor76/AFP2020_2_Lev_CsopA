import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';

const EMPTY = {
  artist: '',
  title: '',
  album: '',
  lyrics: ''
}

const SearchForm = ({onSubmit}) => {
  
  const [song, setSong] = useState(EMPTY);

  useEffect(() => { setSong(song); }, [song]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({...song, [name]: value});    
  }

  const handleSubmit = () => {    
    onSubmit(song);
  }

  return(
    <>    
    <Form variant="primary" style={{width: 500, margin: 50}}>
      <Form.Group controlId="artist" >
        <Form.Label>Előadó</Form.Label>
        <Form.Control           
          type="text" 
          placeholder="Előadó neve vagy részlet belőle" 
          name="artist"
          value={song.artist}
          onChange={handleChange}/>
      </Form.Group>
      <Form.Group controlId="title">
        <Form.Label>Cím</Form.Label>
        <Form.Control           
          type="text" 
          placeholder="Dal címe vagy részlet belőle" 
          name="title"
          value={song.title}
          onChange={handleChange}/>        
      </Form.Group>
      <Form.Group controlId="album">
        <Form.Label>Album</Form.Label>
        <Form.Control           
          type="text" 
          placeholder="Album címe vagy részlet belőle" 
          name="album"
          value={song.album}
          onChange={handleChange}/>        
      </Form.Group>
      <Form.Group controlId="lyrics">
        <Form.Label>Dalszöveg részlet</Form.Label>
        <Form.Control           
          type="text" 
          placeholder="Részlet a dalszövegből eredeti nyelven" 
          name="lyrics"
          value={song.lyrics}
          onChange={handleChange}/>        
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Keresés
      </Button>
    </Form>
    </>     
  )
}

export default SearchForm;