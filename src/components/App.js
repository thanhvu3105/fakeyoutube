import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = { videos: [],selectedVideo: null};


    componentDidMount() {
        this.onTermSubmit('NEWS');
    }


    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            }
        })
        .then(response => console.log(response));

       //   console.log(response); in console, response.data.items display all the videos that we need to import
        this.setState(
            {   videos : response.data.items,
                selectedVideo : response.data.items[0]})   
    };


             //Video object fetch from youtube API
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };


    render() {
        return (    
            
            <div className="ui container" style={{marginTop: "30px"}}> 
            <SearchBar onTermSubmitPROP={this.onTermSubmit}/> 
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column"> <VideoDetail video={this.state.selectedVideo}/> </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos}
                        /> 
                    </div>
                </div>
               </div>
            </div>  
        );
    }
}


export default App;