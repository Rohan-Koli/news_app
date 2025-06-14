# 📰 News Reading App

A modern React-based news reader that fetches the latest headlines from a public API and allows users to bookmark articles for later reading.

---

## 📌 Features

- 🔍 Fetches news articles using a public API (e.g., NewsAPI)
- 🖼️ Displays articles with title, image, and short description
- 🔗 Click on an article to view full content in a detail page (WebView-like)
- ⭐ Bookmark your favorite articles (stored using `localStorage`)
- 📚 View all bookmarked articles in a dedicated "Bookmarks" tab
- 🔄 Pagination support for browsing multiple pages of news
- 🎨 Clean, responsive UI with Tailwind CSS

---

## 🛠 Tech Stack

- React.js (with Vite)
- React Router DOM
- Axios
- Tailwind CSS
- React Icons
- localStorage (used instead of AsyncStorage for web)
- NewsAPI.org

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/news-reader-app.git
cd news-reader-app



### 2. Inatall Dependencies

```bash
npm install



### 3. Setup Enviroment Variables

VITE_NEWS_API_KEY=your_news_api_key     Eg.f634093fefcb4593a0bbd3e9ea72ee61
VITE_NEWS_URL=https://newsapi.org/v2/everything



### 4. Run the Server

```bash
npm run dev



#### Project Structure 

📦 src
├── components
│   ├── NewsList.jsx
│   ├── DetailedNews.jsx
│   └── Bookmarks.jsx
├── App.jsx
├── main.jsx
└── assets
