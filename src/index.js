//importing React
import React from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import Nav from './components/navbar';
//youtube api key
const API_KEY = 'AIzaSyCUKSl78-hR09poPKX0qPVtX6eS1fdVYAk';
//creade the component
const App = () => {

  return (<div>
              <Nav />
              <div> Search:<SearchBar /> </div>
              <div>List: <VideoList /></div>
          </div>);
}
//append it to the DOM
ReactDOM.render(<App />, document.getElementById("container"));
