# React Blog with Appwrite Backend

## 📝 Project Overview
This is a **React Blog Application** powered by **Appwrite** as the backend service. The application allows users to **sign up, sign in, post blogs, like posts, comment on posts, and manage their profiles.**

## 🚀 Features
- **User Authentication** (Sign up, Sign in, Logout) using Appwrite Auth
- **Create, Read, Update, Delete (CRUD) Blog Posts**
- **Like and Comment on Blog Posts**
- **User Profile Management**
- **Real-time Updates**
- **Secure and Scalable**

## 🛠️ Tech Stack
- **Frontend:** React, React Router, Tailwind CSS
- **Backend:** Appwrite (Authentication, Database, Storage)
- **State Management:** React Context API / Redux (Optional)

## 📌 Installation Guide
### 1️⃣ Prerequisites
Make sure you have the following installed:
- Node.js (v14 or later)
- NPM or Yarn
- Appwrite instance (self-hosted or cloud)

### 2️⃣ Clone the Repository
```bash
  git clone https://github.com/Yash-EE-2/react_blogProject.git
  cd react_blogProject
```

### 3️⃣ Install Dependencies
```bash
  npm install  # or yarn install
```

### 4️⃣ Configure Appwrite
1. **Sign up on Appwrite Cloud** (or use a self-hosted instance).
2. **Create a new project** in Appwrite.
3. **Enable Authentication** and configure OAuth providers (Google, GitHub, etc., if needed).
4. **Create a Database** and add a collection for blog posts.
5. **Add necessary attributes** like `title`, `content`, `likes`, `authorId`, etc.
6. **Set up Storage** to handle image uploads.
7. **Generate an API Key** with required permissions.
8. **Update the `.env` file** in your project:
```env
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_APPWRITE_API_KEY=your_api_key
```

### 5️⃣ Start the Development Server
```bash
  npm run dev  # or yarn dev
```


## 📜 API Endpoints
| Feature         | Endpoint            | Method |
|---------------|------------------|--------|
| Sign Up       | `/auth/signup`    | POST   |
| Sign In       | `/auth/signin`    | POST   |
| Create Post   | `/posts/create`   | POST   |
| Get Posts     | `/posts`          | GET    |
| Like Post     | `/posts/like/:id` | PATCH  |
| Comment Post  | `/posts/comment`  | POST   |

## 📂 Folder Structure
```
📦 react-blog-appwrite
├── 📁 src
│   ├── 📁 components   # Reusable UI components
│   ├── 📁 pages        # Main pages like Home, Profile, Post Detail
│   ├── 📁 services     # Appwrite service functions
│   ├── 📁 context      # Context API for global state management
│   ├── 📁 utils        # Helper functions
│   ├── App.js         # Root component
│   ├── main.jsx       # Entry point
├── 📄 .env             # Environment variables
├── 📄 package.json     # Project metadata
├── 📄 README.md        # Project documentation
```

## 🔥 Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Make your changes and commit (`git commit -m 'Added new feature'`).
4. Push to your forked repo and create a pull request.

## 📝 License
This project is open for contribution.

---
Happy coding! 🚀

