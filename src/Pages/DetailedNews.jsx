import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaBookmark } from "react-icons/fa";
function DetailedNews() {
    const location = useLocation()
    const news = location.state || {}
    const navigate = useNavigate()
    const handleBookmark = (newsItem) => {
        let stored = JSON.parse(localStorage.getItem('bookmarks')) || [];
        const exists = stored.find(item => item.title === newsItem.title);
        if (!exists) {
            localStorage.setItem('bookmarks', JSON.stringify([...stored, newsItem]));
            alert("Bookmarked!");
        } else {
            stored = stored.filter((item) => item.title !== newsItem.title)
            localStorage.setItem("bookmarks", JSON.stringify(stored))
            alert("Removed from bookmarked!");
        }
    };
    return (
        <div className=" w-full bg-gray-50 flex flex-col items-center justify-center px-4 py-5">
            <div className="bg-white max-w-3xl w-full relative rounded-3xl shadow-xl p-8 flex flex-col gap-6">
               
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleBookmark(news);
                    }}
                    className="absolute top-3 right-3 text-black bg-white p-2 rounded-lg hover:text-blue-500"
                >
                    <FaBookmark size={20} />
                </button>
                <img
                    src={news.urlToImage || 'https://via.placeholder.com/600x400?text=No+Image'}
                    alt={news.title}
                    className="rounded-2xl w-full h-64 object-cover shadow-sm"
                />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{news.title}</h1>
                    <p className="text-gray-700 text-base leading-relaxed">
                        {news.description || "No description available."}
                    </p>
                </div>
                <div className="flex flex-wrap justify-between text-sm text-gray-500 border-t pt-4">
                    <p>
                        <span className="font-medium text-gray-600">Author:</span>{" "}
                        {news.author || "Unknown"}
                    </p>
                    <p>
                        <span className="font-medium text-gray-600">Source:</span>{" "}
                        {news.source?.name || "N/A"}
                    </p>
                    <p>
                        <span className="font-medium text-gray-600">Published:</span>{" "}
                        {new Date(news.publishedAt).toLocaleString()}
                    </p>
                </div>
            </div>
            <button onClick={()=>navigate("/")} className='p-3 text-white bg-blue-400 rounded-lg font-bold m-3 '>View More</button>
        </div>


    )
}

export default DetailedNews