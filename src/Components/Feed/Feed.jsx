import React, { useEffect, useState } from 'react';
import "./Feed.css";
import { Link } from 'react-router-dom';
import { API_KEY, valueConvertor } from '../../data';
import moment from 'moment';

const Feed = ({category}) => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoListUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoListUrl).then(response => response.json()).then(data => setData(data.items));
  }

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {console.log(data)}
      {data.map((item, index) => {
        return (
          <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
            <img src={item.snippet.thumbnails.maxres ? item.snippet.thumbnails.maxres.url : item.snippet.thumbnails.medium.url} alt="thumbnail 1" />
            <h2 className='card-video-title'>{item.snippet.title}</h2>
            <h3 className='card-channel-title'>{item.snippet.channelTitle}</h3>
            <p className='card-views-time'>{valueConvertor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Feed;