import React, { useEffect, useState } from 'react';
import "./PlayVideo.css";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import share from "../../assets/share.svg";
import save from "../../assets/save.svg";
import user_profile from "../../assets/profile-icon.svg";
import { API_KEY, convertUrlsToLinks, valueConvertor } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
    const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        /* Fetching video Data */
        const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetailsUrl).then(response => response.json()).then(data => setApiData(data.items[0]));
    }

    const fetchChannelData = async () => {
        /* Fetched Channel Data */
        if(apiData) {
            const channelDetailsUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
            await fetch(channelDetailsUrl).then(response => response.json()).then(data => setChannelData(data.items[0]));

            const commentDetailsUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
            await fetch(commentDetailsUrl).then(response => response.json()).then(data => setCommentData(data.items));
        }
    }

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        fetchChannelData();
    }, [apiData]);
  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
        <div className='play-video-info'>
            <p className=''>{apiData ? valueConvertor(apiData.statistics.viewCount) : "100K"} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "2 days ago"}</p>
            <div>
                <span className='like-count'><img src={like} alt="like image" /> {apiData ? valueConvertor(apiData.statistics.likeCount) : "10k"}</span>
                <span><img src={dislike} alt="dislike image" /></span>
                <span><img src={share} alt="share image" /> Share</span>
                <span><img src={save} alt="Save image" /> Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="jack image" />
            <div>
                <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
                <span>{channelData ? valueConvertor(channelData.statistics.subscriberCount) : ""} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p className='video-description' dangerouslySetInnerHTML={{ __html: apiData ? convertUrlsToLinks(apiData.snippet.description).replace(/\n/g, '<br/>') : "Description Here" }} />
            <hr />
            <h4>{apiData ? valueConvertor(apiData.statistics.commentCount) : "125"} Comments</h4>
            {commentData.map((item, index) => {
                const containsHTML = /<\/?[a-z][\s\S]*>/i.test(item.snippet.topLevelComment.snippet.textDisplay);
                const profileImage = item.snippet.topLevelComment.snippet.authorProfileImageUrl;
                return (
                    <div key={index} className="comment">
                        <a target='_blank' href={item.snippet.topLevelComment.snippet.authorChannelUrl}>
                            <img src={profileImage} />
                        </a>
                        <div>
                            <a target='_blank' href={item.snippet.topLevelComment.snippet.authorChannelUrl}>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            </a>
                            {
                                containsHTML ? 
                                <p dangerouslySetInnerHTML={{ __html: item.snippet.topLevelComment.snippet.textDisplay }} /> : 
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            }
                            <div className="comment-action">
                                <img src={like} alt="like image" />
                                <span>{valueConvertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt="dislike image" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PlayVideo