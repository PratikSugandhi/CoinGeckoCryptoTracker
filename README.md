# CoinGeckoCryptoTracker

[Deployed Project Url](https://coin-gecko-crypto-tracker-2tqn.vercel.app/)

---
## Glimpses Of Project(ScreenShots)

<img width="1887" height="756" alt="Screenshot 2026-02-14 003512" src="https://github.com/user-attachments/assets/42cd835e-7035-4353-972d-056a565d342e" />

---

<img width="1904" height="878" alt="Screenshot 2026-02-14 003611" src="https://github.com/user-attachments/assets/b1aeed47-20d3-4c35-b3e6-24fb20d27a32" />

---

<img width="1909" height="918" alt="Screenshot 2026-02-14 003550" src="https://github.com/user-attachments/assets/87d8b3dc-9b3a-4fd9-981e-92f3e1dd476a" />

---

<img width="1906" height="885" alt="Screenshot 2026-02-14 003525" src="https://github.com/user-attachments/assets/01789a8b-4fdc-422d-adfa-e995e96f862f" />

---

**CoinGeckoCryptoTracker** is a modern cryptocurrency tracking web application that provides live updates on crypto prices and trends. The app leverages the CoinGecko API to fetch accurate cryptocurrency data in real-time and ensures a smooth user experience using efficient state management, caching mechanisms, and optimized loading strategies.

---

## Features

- **API Integration**: Fetches real-time cryptocurrency data using the [CoinGecko API](https://www.coingecko.com/en/api).  
- **HTTP Requests with Axios**: All API calls are handled via Axios for better error handling and cleaner syntax.  
- **State Management**: Uses **Zustand** to manage application state efficiently.  
- **Lazy Loading**:  
  - Pages are loaded lazily to improve initial load performance.  
  - Images are lazy-loaded to reduce bandwidth usage and optimize UI rendering.  
- **Error Handling**: Implements **Error Boundaries** and **React Suspense** for robust error handling and smoother user experience.  
- **Caching and Stale Data Management**: Implements caching mechanisms with controlled `staleTime` to reduce unnecessary API calls and improve performance.  
- **Well-Organized Codebase**: Modular structure with separation of concerns, making it scalable and maintainable.  

---

## Tech Stack

- **Frontend**: React, JSX  
- **State Management**: Zustand  
- **HTTP Client**: Axios  
- **API**: CoinGecko  
- **Optimization**: Lazy loading, Suspense, Error Boundaries  
- **Styling**:  Tailwind

---
