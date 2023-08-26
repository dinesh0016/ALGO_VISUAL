import './css/sorting.css';
import './css/styles.css';

import { Link } from "react-router-dom";

function Sortings() {
  return (
    <div>
        <header>
    <h1 align="center"><strong>Sorting Visualizer</strong></h1>
    <nav>
        <div className="row">
            <div className="col gap-2 d-sm-flex" id="newArray">
                <button type="button" className="btn btn-outline-success btn-dark newArray">Generate Array</button>
            </div>
            
            <div className="col gap-2 d-sm-flex justify-content-end">
                <button type="button" className="btn btn-outline-primary btn-dark bubbleSort">Bubble Sort</button>
                <button type="button" className="btn btn-outline-primary btn-dark selectionSort">Selection Sort</button>
                <button type="button" className="btn btn-outline-primary btn-dark insertionSort">Insertion Sort</button>
                <button type="button" className="btn btn-outline-primary btn-dark quickSort">Quick Sort</button>
                <button type="button" className="btn btn-outline-primary btn-dark mergeSort">Merge Sort</button>
            </div>
        </div>
    </nav>
</header>
<body className="p-3 mb-2 bg-dark text-white">
    
    <div id="bars" className="flex-container">

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <script src="./js/sorting/bubble.js"></script>
    <script src="./js/sorting/insertion.js"></script>
    <script src="./js/sorting/merge.js"></script>
    <script src="./js/sorting/quick.js"></script>
    <script src="./js/sorting/selection.js"></script>
    <script src="./js/sorting/sorting.js"></script>
</body>
    </div>
  );
}

export default Sortings;
