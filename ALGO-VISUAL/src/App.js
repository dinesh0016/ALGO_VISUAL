import logo from './logo.svg';
import './css/sorting.css';
import './css/styles.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
    <br/>
    <h1 className="container" ><i className="fa-regular fa-face-thinking" ><strong>Explore Awesome Algorithms !</strong></i></h1>
    <br/>
    <div className="card-deck">
        <div className="card">
            <a href="./templates/sorting.html"><img className="card-image" src="https://www.crio.do/blog/content/images/size/w1000/2022/02/Insertion-Sort.png" alt="Sorting image"/></a>
            <div className="container">
                <div className="card-title">
                    <h2>Sorting Algorithms</h2>
                </div>
                <div className="card-buttons">
                    <button className="btn-danger"><Link to="/sorting">Visualize</Link></button>
                </div>
            </div>
            <br/>
        </div>
    </div>
    <br/>
    <br/>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
     integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
     crossorigin="anonymous"></script>
     <div className="footer-bottom">
        &copy; Designed and Developed by Three Expertise
    </div>
    </div>
  );
}

export default App;
