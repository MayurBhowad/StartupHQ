
import './App.css';
import Navbar from './components/Navbar.component';
import Posts from './components/Posts.component';
import SinglePost from './components/SinglePost.component';

function App() {
  return (
    <div className="bg-gray-200 h-full pb-2">
      <Navbar />
      <Posts />
      {/* <SinglePost /> */}
    </div>
  );
}

export default App;
