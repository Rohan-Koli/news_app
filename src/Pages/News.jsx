import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaBookmark } from "react-icons/fa";

function News() {
  const [newsArray, setNewsArray] = useState([])
  const [totalArticles, setTotalArticles] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 8

  const navigate = useNavigate()

  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate() - 1).padStart(2, '0')
  const formattedDate = `${year}-${month}-${day}`

  const fetchNews = async (page = 1) => {
    try {
      const res = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: 'Apple',
          from: formattedDate,
          sortBy: 'popularity',
          apiKey: "f634093fefcb4593a0bbd3e9ea72ee61",
          page,
          pageSize
        },
      })
      if (res.data.status === "ok") {
        setNewsArray(res.data.articles)
        setTotalArticles(res.data.totalResults)
      }
    } catch (error) {
      console.error("Error fetching news:", error)
    }
  }

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage])

  const handleBookmark = (newsItem) => {
    let stored = JSON.parse(localStorage.getItem('bookmarks')) || []
    const exists = stored.find(item => item.title === newsItem.title)
    if (!exists) {
      localStorage.setItem('bookmarks', JSON.stringify([...stored, newsItem]))
      alert("Bookmarked!")
    } else {
      stored = stored.filter(item => item.title !== newsItem.title)
      localStorage.setItem("bookmarks", JSON.stringify(stored))
      alert("Removed from bookmarked!")
    }
  }

  const totalPages = Math.ceil(totalArticles / pageSize)

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">📰 Latest News</h2>

      {newsArray.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-center gap-6">
            {newsArray.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md w-72 p-4 flex flex-col transition-transform hover:scale-105 relative"
                onClick={() => navigate("/DetailedNews", { state: news })}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleBookmark(news)
                  }}
                  className="absolute top-3 right-3 text-black bg-white p-2 rounded-lg hover:text-blue-500"
                >
                  <FaBookmark size={20} />
                </button>
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

          {/* Pagination Controls */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              ← Prev
            </button>

            <span className="text-lg font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg">No news articles found.</p>
      )}
    </div>
  )
}

export default News
