import React, { useEffect, useState } from 'react';
import "./Recommended.css";
import { API_KEY, valueConvertor } from '../../data';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Recommended = ({categoryId}) => {
    const [recommendData, setRecommendData] = useState([]);

    const fetchRecommendData = async () => {
        const recommendUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(recommendUrl).then(res => res.json()).then(data => setRecommendData(data.items))
    }

    useEffect(() => {
        fetchRecommendData();
    }, []);

  return (
    <div className='recommended'>
        {recommendData.map((item, index) => {
            return (
                <Link to={`/youtube-clone/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                    <img src={item.snippet.thumbnails.medium.url} alt="thumnail image" />
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{valueConvertor(item.statistics.viewCount)} Views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default Recommended;