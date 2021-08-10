function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: 'GET',
      // url: 'https://pokeapi.co/api/v2/pokemon',
      // method: e.target.id.value,
      url: e.target.url.value,
    };
    // console.log('e.target.url', e.target.url.value);
    // console.log('e.target.id', e.target.id);

    props.handleApiCall(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' />
          <button type='submit'>GO!</button>
          <br />
        </label>
        <label className='methods'>
          <span id='get'> GET </span>
          <span id='post'> POST </span>
          <span id='put'> PUT </span>
          <span id='delete'> DELETE </span>
        </label>
      </form>
    </>
  );
}

export default Form;
