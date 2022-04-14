import './App.css';
import './bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Table} from 'react-bootstrap';
import { useState } from 'react';

function App() {
const [nama, setNama] = useState("");
const [tglLahir, setTglLahir] = useState("");
const [pesan, setPesan] = useState("");
const [jKelamin, setJKelamin] = useState("");
const [agama, setAgama] = useState("");
const [tampilkan, setTampilkan] = useState(false);
const [userinfo, setUserInfo] = useState({
  hobi: [],
  response: [],
});
  
const handleChange = (e) => {
  // Destructuring
  const { value, checked } = e.target;
  const { hobi } = userinfo;
  if (checked) {    //jika checkbox terisi
    setUserInfo({
      hobi: [...hobi, value],
      response: [...hobi, value],
    });
  }
  else {      //jika checkbox blum terisi
    setUserInfo({
      hobi: hobi.filter((e) => e !== value),
      response: hobi.filter((e) => e !== value),
    });
  }
};
const handleSubmit = (event) => {
  event.preventDefault();
}
return (
  <div className='container border shadow p-5'>
    <h1 className='text-center'>BIODATA</h1>

    {/* Set Nama Lengkap */}
    <form onSubmit={handleSubmit}>
        <Form.Label >Nama Lengkap</Form.Label>
        <Form.Control
          type="text"
          placeholder='Nama Lengkap'
          onChange={(e) => setNama(e.target.value)}
        />
        <Form.Label className='mb-3 mt-2'>Tanggal Lahir</Form.Label>
        <Form.Control
          type="date"
          onChange={(e) => setTglLahir(e.target.value)}
        />

      {/* Set Jenis Kelamin */}
    <Form>
    <Form.Label className='mb-3 mt-2'>Jenis Kelamin</Form.Label>  
      {['radio'].map((type) => (
        <div key={`inline-${type}`}>
          <Form.Check
            inline
            label="Laki-Laki"
            value = "Laki-Laki"
            name="jKelamin"
            type={type}
            onChange = {(e) => setJKelamin(e.target.value)}
          />
          <Form.Check
            inline
            label="Perempuan"
            value = "Perempuan"
            name="jKelamin"
            type={type}
            onChange = {(e) => setJKelamin(e.target.value)}
          />
        </div>
      ))
      }
    </Form>

    {/* Set Hobi */}
    <Form >
    <Form.Label className='mb-3 mt-2'>Hobi</Form.Label>  
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`}>
          <Form.Check
            inline
            label="Ngoding"
            value = "Ngoding, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Rebahan"
            value = "Rebahan, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Menghuleng"
            value = "Menghuleng, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Baca Buku"
            value = "Baca Buku, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Nonton Youtube"
            value = "Nonton Youtube, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Dengerin Lagu"
            value = "Dengerin Lagu, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Netflix-an"
            value = "Netflix-an"
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Other"
            value = "Other, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
        </div>
      ))
      }
    </Form>

  {/* Set Agama */}
  <Form.Label className='mb-3 mt-2'>Agama</Form.Label>
    <Form.Select aria-label="Default select example" onChange={(e) => setAgama(e.target.value)}>
      <option>Agama</option>
      <option value="Islam">Islam</option>
      <option value="Hindu">Hindu</option>
      <option value="Budha">Budha</option>
      <option value="Protestan">Protestan</option>
      <option value="Katholik">Katholik</option>
      <option value="Other">Other</option>
    </Form.Select>

    {/*Set Pesan */}
    <Form.Group className="mb-3 mt-2">
      <Form.Label>Pesan</Form.Label>
      <Form.Control as="textarea" rows={3} onChange={(e) => setPesan(e.target.value)}/>
    </Form.Group>

    <Button className='mt-4' type='submit' variant="info" onClick={() => setTampilkan(prev => !prev)}>Submit</Button>{' '}{tampilkan &&

    /* Menampilkan data dalam tabel */
    <Table striped bordered hover shadow className='mt-4' responsive>
    <thead>
      <tr>
        <th>Label</th>
          <th >Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nama</td>
          <td >{nama}</td>
      </tr>
      <tr>
        <td>Tanggal Lahir</td>
          <td>{tglLahir}</td>
      </tr>
      <tr>
        <td>Jenis Kelamin</td>
          <td>{jKelamin}</td>
      </tr>
      <tr>
        <td>Hobi</td>
        <td>{userinfo.response}</td>
      </tr>
      <tr>
        <td>Agama</td>
          <td>{agama}</td>
      </tr>
      <tr>
        <td>Pesan</td>
          <td>{pesan}</td>
      </tr>
    </tbody>
  </Table>
    }
  </form>
  
</div>
);

}

export default App;
