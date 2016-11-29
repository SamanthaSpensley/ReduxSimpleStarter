// writing Component/views are snippets of code that produce html
// nest Components to make complex apps relatively simple
// ONE component per file

// index.js is the root of application; all other components will branch from index.js

// react creates and manages components
// reactDOM interacts with DOM
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// import components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube API Key
const API_KEY = 'AIzaSyBA-XkA-fQkGNBL-437Cgqaak_kNsTF19I'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
        });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        {/* pass video data from parent component (App) to child component (VideoList) */}
        {/* pass data or prop videos */}
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take component's generated HTML and put in the DOM
// (App) = class of component; (<App />) = instance of component
// document.querySelector('container') targets DOM node 'container' from index.html
ReactDOM.render(<App />, document.querySelector('.container'));
