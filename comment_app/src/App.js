import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './components/SearchBox';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      <h1>게시글</h1>
      <div>
        <SearchBox/>
        <hr/>
        <CommentForm/>
        <CommentList/>
      </div>
    </Container>
  );
}

export default App;
