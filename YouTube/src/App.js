import React from 'react';
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList } from './components'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: {},
  }

  handleFormSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        key: 'AIzaSyALLzRjwhT748ONNpj9QS0dgjJeh5xumlk',
        part: 'snippet',
        maxResults: 25,
        q: searchTerm,
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: { ...response.data.items[0] }
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  componentDidMount() {
    this.handleFormSubmit('javascript projects')
  }


  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className='maincontainer'>
        <div>
          <SearchBar onFormSubmit={this.handleFormSubmit} />
        </div>
        <div className='videoscontainer'>
          <VideoDetail selectedVideo={selectedVideo} />
        
          <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
        </div>
      </div>
    )
  }
}

export default App;
