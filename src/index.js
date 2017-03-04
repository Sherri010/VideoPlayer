//importing React
import React , {Component} from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import Nav from './components/navbar';
import Footer from './components/footer';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
//youtube api key
const API_KEY = 'AIzaSyCUKSl78-hR09poPKX0qPVtX6eS1fdVYAk';


//creade the component
class App extends Component {
  constructor(props){
    super(props);
    this.state={videos:[]}

    //ajax for fetching data from youtube api
    YTSearch({key: API_KEY, term:'surfbeards'}, videos =>{
      console.log(videos)
      //this.setState({videos:videos}) when key and value are having the same name you can mention just one is es6
      this.setState({videos});
    });
  }

  render(){
    return (<div >
              <Nav />
              <div className="main">
                <div> Search:<SearchBar /> </div>
                <VideoDetail video={this.state.videos[0]} />
                {/* passes props to VideoList */}
                <div><p className="search-intro">Search Results:</p><VideoList videos={this.state.videos}/></div>
              </div>
              {/* <Footer /> */}
          </div>
        );
    }
}
//append it to the DOM
ReactDOM.render(<App />, document.getElementById("container"));
