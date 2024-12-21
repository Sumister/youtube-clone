import home_icon from "./assets/home-icon.svg";
import gaming_icon from "./assets/gaming-icon.svg";
import automobiles_icon from "./assets/automobiles-icon.svg";
import sports_cat from "./assets/sports_cat.svg";
import entertainment_icon from "./assets/entertainment-icon.svg";
import technology_icon from "./assets/technology-icon.svg";
import music_icon from "./assets/music-icon.svg";
import blogs_icon from "./assets/blogs-icon.svg";
import news_icon from "./assets/news-icon.svg";
import tseries_image from "./assets/tseries-icon.jpg";
import mrbeast_image from "./assets/mr-beast.jpg";
import goldmines_image from "./assets/goldmines.jpg";
import sonypictures_image from "./assets/sony-pictures.jpg"
import aajtak_image from "./assets/aaj-tak.jpg";

export const API_KEY = 'AIzaSyAQsshPyO6FSvQeR1t5fmFrVxVEo6YVVQs';

export const valueConvertor = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    } else if(value >= 1000){
        return Math.floor(value/1000) + "K";
    } else {
        return value;
    }
}

export const convertUrlsToLinks = (text) => {
    // Regular expression to match URLs (http, https, ftp, and mailto)
    const urlPattern = /(\bhttps?:\/\/[^\s<>]+|www\.[^\s<>]+|mailto:[^\s<>]+)/gi;

    // Replace matched URLs with anchor tags
    return text.replace(urlPattern, (url) => {
        // If the URL starts with "http" or "https", add full URL to anchor
        if (url.startsWith('http') || url.startsWith('https')) {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
        } else {
            // If it's a "mailto" link, we handle it accordingly
            return `<a href="${url}">${url}</a>`;
        }
    });
}

export const categoryArr = [
    {
        categoryName : "Home",
        categoryIcon : home_icon,
        categoryId : 0
    },
    {
        categoryName : "Gaming",
        categoryIcon : gaming_icon,
        categoryId : 20
    },
    {
        categoryName : "Autos & Vehicles",
        categoryIcon : automobiles_icon,
        categoryId : 2
    },
    {
        categoryName : "Sports",
        categoryIcon : sports_cat,
        categoryId : 17
    },
    {
        categoryName : "Entertainment",
        categoryIcon : entertainment_icon,
        categoryId : 24
    },
    {
        categoryName : "Technology",
        categoryIcon : technology_icon,
        categoryId : 28
    },
    {
        categoryName : "Music",
        categoryIcon : music_icon,
        categoryId : 10
    },
    {
        categoryName : "People & Blogs",
        categoryIcon : blogs_icon,
        categoryId : 22
    },
    {
        categoryName : "News & Politics",
        categoryIcon : news_icon,
        categoryId : 25
    },
]

export const subscribedArr = [
    {
        channelName : "T-Series",
        channelIcon : tseries_image
    },
    {
        channelName : "Mr.beast",
        channelIcon : mrbeast_image
    },
    {
        channelName : "Goldmines",
        channelIcon : goldmines_image
    },
    {
        channelName : "Sony Pictures",
        channelIcon : sonypictures_image
    },
    {
        channelName : "Aaj tak",
        channelIcon : aajtak_image
    },
]