# YouTube Clone 

A fully responsive YouTube clone built using **React**, **Vite**, and **TailwindCSS**. It mimics core YouTube features like video playback, channel browsing, search, and recommendations — all while utilizing modern libraries like **React Query** and **React Router DOM**.

---

⚠️ API Usage Notice

This project uses a free tier of a public API from RapidAPI with a limit of 1000 requests per month.
If the app stops fetching data or you see empty results, it's likely the request quota has been exceeded.
Please try again later or use your own API key from RapidAPI.

---

##  Features

- Built with **React 19** and **Vite** for blazing fast development.
- Styled using **TailwindCSS**.
- **Infinite scrolling** with intelligent caching using **React Query**.
- Search functionality for videos and channels.
- Video details with recommended videos and comment sections.
- Channel pages showing channel info and video lists.
- Navigate between videos, channels, and search results seamlessly.
- Fully **responsive** for all screen sizes.
- **Lottie animations** for empty/error/404 states.

---

## Project Structure

```
src/
├── api/                     # Axios API logic
├── assets/                 # Images, icons, etc.
├── components/             # Reusable UI components
│   ├── ChannelHeader.jsx
│   ├── ListItem.jsx
│   ├── Navbar.jsx
│   ├── RelatedVideos.jsx
│   ├── Searchbar.jsx
│   ├── Sidebar.jsx
│   └── VideoCard.jsx
├── hooks/                  # React Query custom hooks
├── layouts/                # Layout components
├── lotties/                # Lottie animation JSONs
├── pages/                  # Main page views
│   ├── HomeFeed.jsx        
│   ├── ChannelPage.jsx     
│   ├── VideoDetails.jsx    
│   └── SearchResults.jsx   
├── routes/                 # App routing
│   └── AppRouter.jsx
├── utils/                  # Utility functions
├── main.jsx                # Entry point
└── index.css               # Global styles
```

---

## Pages Overview

### HomeFeed.jsx
Displays trending or recommended videos in a responsive grid.

![home](https://github.com/user-attachments/assets/885c6245-5786-41f7-a744-32c87a73db18)

---

### VideoDetails.jsx
- Shows selected video player.
- Displays comments, recommended videos.
- Allows clicking on recommendations to navigate.
  
![video det pc](https://github.com/user-attachments/assets/55a01124-f803-4c12-b02e-60ef6f16b54c)
![video det mobile](https://github.com/user-attachments/assets/ddba681a-e6bc-4de9-a266-0b756cd5640e)

---

### SearchResults.jsx
- Search videos by keywords.
- Results update on input.

![search page pc](https://github.com/user-attachments/assets/e0dc3fb9-02c7-4c25-b0b2-6482a73a53c5)
![search mobile](https://github.com/user-attachments/assets/73f21453-4913-41bc-9d93-469fb033e972)

---

### ChannelPage.jsx
- Shows channel banner, title, stats.
- Lists videos uploaded by the channel.
- Clickable video cards.

![channel det pc](https://github.com/user-attachments/assets/3a087cac-fda7-40a4-87a6-f54ffae93be8)
![channel det mobile](https://github.com/user-attachments/assets/9d381b4a-e1c5-4b0f-9b1a-acf2138a7d67)

---

## State Management & Data Fetching

Using `@tanstack/react-query` for API data fetching, caching, and pagination.
All fetching logic is abstracted into hooks in `/hooks` folder.

Examples:
- `useGetVideoData`
- `useGetSearchRes`
- `useInfiniteChannelVideos`

---

## Main Dependencies

```json
"react": "^19.1.0",
"vite": "^6.3.1",
"react-router-dom": "^7.5.1",
"@tanstack/react-query": "^5.74.4",
"tailwindcss": "^4.1.4",
"axios": "^1.8.4",
"lottie-react": "^2.4.1",
"react-icons": "^5.5.0",
"react-spinners": "^0.17.0"
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open on
http://localhost:5173/
```

---

## Notes

- Designed to look like YouTube but is **not affiliated** with YouTube/Google.
- Works well on all devices due to responsive Tailwind design.
- Supports deep linking to specific videos and channels.
- The YouTube API used is created and maintained by **Omar M'Haimdat** on RapidAPI.

---

## License

MIT © [MarwanUsama]
