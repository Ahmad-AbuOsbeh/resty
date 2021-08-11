import { useState } from 'react';
import './form.scss';

function Form(props) {
  const [url, seturl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [method, setMethod] = useState('GET');
  const [showField, setShowField] = useState(false);
  const [userData, setUserData] = useState('write your data here here as a json');

  // let url = 'https://pokeapi.co/api/v2/pokemon';
  async function handleSubmit(e) {
    e.preventDefault();
    props.shwLoading();
    const userData = new FormData(e.target);
    const value = userData.get('userData');

    const formData = {
      method: method,
      url: url,
    };
    setShowField(false);
    let response;
    if (method == 'PUT' || method == 'POST') {
      response = { data: value };
    } else if (method == 'DELETE') {
      response = { delete: 'delete done' };
    } else {
      const data = await fetch(url);
      console.log('data.headers', data.headers);
      const dataJson = await data.json();
      response = dataJson;
    }

    props.handleApiCall(formData, response);
  }

  function onChangeHandlerUrl(e) {
    seturl(e.target.value);
  }
  function onChangeHandlerUserData(e) {
    setUserData(e.target.value);
  }
  function methodsHandler(e) {
    // i have problem here; there is a lag in setMethod by one!
    setMethod(e.target.value);
    if (e.target.value == 'POST' || e.target.value == 'PUT') {
      setShowField(true);
    } else {
      setShowField(false);
    }
  }

  return (
    <>
      {props.sohwLoading && <h5>Lodaing..</h5>}
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' value={url} onChange={onChangeHandlerUrl} />
          <button type='submit' data-testid='submitButton'>
            GO!
          </button>
          <br />
        </label>

        <select className='methods' name='methods' onChange={methodsHandler}>
          <option id='get' value='GET'>
            GET
          </option>
          <option id='post' value='POST'>
            POST
          </option>
          <option id='put' value='PUT'>
            PUT
          </option>
          <option id='delete' value='DELETE'>
            DELETE
          </option>
        </select>
        <br />
        <br />
        <br />
        {showField && <input name='userData' type='text' id='put-post' value={userData} onChange={onChangeHandlerUserData}></input>}
      </form>
    </>
  );
}

export default Form;
