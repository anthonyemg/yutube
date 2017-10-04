import React from 'react';
import Comments from './Comments';

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='video-player'>

        <div className='video-playerLeftColumn'>
          <div className='video-playerVideo'>
            <iframe
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${this.props.selectedVideoId}?autoplay=1`}
              allowFullScreen>
            </iframe>
          </div>
          <div className="video-playerDetails">
            <h3>{this.props.selectedVideo.snippet.title}</h3>
          </div>

          {this.props.selectedVideoComments &&
            <Comments
              selectedVideoComments={this.props.selectedVideoComments}
            />
          }
        </div>

        {this.props.selectedVideoRelatedVideos &&
          <div className='video-playerUpNext'>
            <span>Up next</span>
            <div className='video-playerUpNextList'>
              {this.props.selectedVideoRelatedVideos.map((video, idx) => (
                <div className='video-playerUpNextVideoContainer' key={idx} onClick={() => this.props.handleSelectVideo(video)}>
                  <img src={video.snippet.thumbnails.medium.url} />
                  <div className='video-playerUpNextVideoWrapper'>
                    <span className='video-playerUpNextVideoTitle'>{video.snippet.title}</span>
                    <span className='video-playerUpNextVideoText'>{video.snippet.channelTitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }

      </div>
    )
  }
}

export default VideoPlayer;
