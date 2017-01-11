var React = require('react');
var SongsDetail = require('../components/SongsDetail');

var SongsContainer = React.createClass({

  getInitialState: function(){
    return {
      songs: []
    };
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      if ( request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({songs: data.feed.entry});
      }
    }.bind(this);
    request.send(null);
  },

  render: function(){
    return (
      <div className="songs-container">
        <h2>Top 20</h2>
        <SongsDetail songs={this.state.songs}/>
      </div>
    );
  }

});

module.exports = SongsContainer;