var React = require('react');

var SongsDetail = function(props){

  var songDetails = props.songs.map(function(song, index){
    var coverThumbnailLinked = <a href={song['link'][0]['attributes']['href']}><img src={song['im:image'][2]['label']} /></a>;
    var chartPosition = <strong>{index + 1}</strong>;
    var songTitleLinked = <a href={song['link'][0]['attributes']['href']}>{song['im:name']['label']}</a>;
    var artistNameLinked = <a href={song['im:artist']['attributes']['href']}>{song['im:artist']['label']}</a>;
    var audio = <audio src={song['link'][1]['attributes']['href']} controls="controls"/>;

    return (
      <div className="song-detail" key={song['id']['attributes']['im:id']}>
        <p className="song-position">
          {chartPosition}
        </p>
        <p>
          {coverThumbnailLinked}
        </p>
        <p>
          {songTitleLinked} &#9675; {artistNameLinked}
        </p>
        <p>
          {audio}
        </p>
      </div>
    );
  });

  return (
    <div className="songs-detail">
      {songDetails}
    </div>
  );
};

module.exports = SongsDetail;