import React, { useState } from 'react';
import Button from './Button';
import Api from './componets/Button';
import Resources from './componets/Resources';
import jsonplaceholder from './apis/jsonplaceholder';

const App = () => {
  const [resources, setResources] = useState([]);

  const getPosts = async() => {
    try {
      const posts = await jsonplaceholder.get('/posts');
      setResources(posts.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAlbums = async() => {
    try {
      const albums = await jsonplaceholder.get('/albums');
      setResources(albums.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <div>ボタンのprops</div>
        <Button title='赤'/>
        <Button title='青'/>
        <Button title='黄色'/>
        <Button title='緑'/>
      </div>
      <div style={{ margin: '30px'}}>
        <div style={{ margin: '20px' }}>react-api</div>
        <Api onClick={getPosts} color='red' text='posts' />
        <Api onClick={getAlbums} color='blue' text='album' />
        <Resources resources={resources} />
      </div>
    </>
  );
}

export default App;
