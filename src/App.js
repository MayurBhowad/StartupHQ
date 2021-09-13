import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.component';
import Posts from './components/Posts.component';
import SinglePost from './components/SinglePost.component';

function App() {
  return (
    <div className="bg-gray-200 h-full pb-2">
      <Router>
        <Navbar />
        <Route path="/" exact component={Posts} />
        <Route path="/:id" component={SinglePost} />
      </Router>
    </div>
  );
}

export default App;
