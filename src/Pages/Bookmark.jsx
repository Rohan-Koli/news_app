import React from 'react'
import { FaBookmark } from "react-icons/fa";
function Bookmark() {

    const bookmarked = JSON.parse(localStorage.getItem("bookmarks"))
    
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">📰 Latest News</h2>
    
          { Array.isArray(bookmarked) && bookmarked.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {bookmarked.map((news, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md w-72 p-4 flex flex-col transition-transform hover:scale-105 relative"
                  onClick={() => navigate("/DetailedNews", { state: news })}
                >
                  <img
                    src={news.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image'}
                    alt={news.title}
                    className="h-40 w-full object-cover rounded-md mb-3"
                  />
                  <h3 className="font-semibold text-lg line-clamp-2 mb-2">{news.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{news.description || "No description available."}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">No news articles found.</p>
          )}
        </div>
  )
}

export default Bookmark