import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import Home from './pages/home/home';
import PostInfo from './pages/postInfo/postInfo';
import AddPost from './pages/addPost/addPost';

import store from './store/store';
import { fetchPosts } from './store/features/posts/posts.thunks';
import { fetchUsers } from './store/features/users/users.thunks'
import { fetchComments } from './store/features/comments/comments.thunks';


// fetch posts, users and comments right when the application loads
store.dispatch(fetchPosts())
store.dispatch(fetchUsers())
store.dispatch(fetchComments())


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="home" index element={ <Home /> } />
          <Route path="post-info/:postId" element={ <PostInfo /> } />
          <Route path="new-post" element={ <AddPost /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
