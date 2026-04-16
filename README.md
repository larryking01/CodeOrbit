# 🚀 CodeOrbit

CodeOrbit is a developer-focused social feed application built to explore modern state management patterns using Redux Toolkit.

The project simulates a real-world app where users can view, create, and interact with posts while maintaining synchronization between client-side state and a mock backend powered by JSON Server.

---

## ✨ Features

* 📄 View a list of posts
* 👤 Associate posts with users
* ❤️ Like and bookmark posts
* 🗑️ Delete posts (with optimistic updates & rollback)
* 🔄 Async data fetching with Redux Thunks
* 🧠 Memoized selectors for derived state
* ⚡ Normalized state using `createEntityAdapter`

---

## 🧰 Tech Stack

* React
* Redux Toolkit
* JavaScript / TypeScript
* JSON Server (mock backend)

---

## 🧠 Learning Goals

This project focuses on mastering:

* Traditional Redux patterns (reducers, actions, thunks)
* Optimistic UI updates
* State normalization
* Memoized selectors with `createSelector`
* Client vs Server state management

---

## 🔄 Future Improvements

* Refactor data fetching to RTK Query
* Add comments feature
* Add user profiles
* Implement pagination and filtering
* Improve UI/UX

---

## ▶️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run JSON Server

```bash
npx json-server --watch db.json --port 8000
```

### 3. Start the app

```bash
npm start
```

---

## 📌 Notes

This project is part of a learning journey to deeply understand Redux before transitioning to RTK Query.

---

## 👤 Author

Larry Williams
