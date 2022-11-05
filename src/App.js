// import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your list here</figcaption>
            <div className="addItems">
              <input type="text" placeholder="✍ Add Items" />
              <i className="fa fa-plus add-btn"></i>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default App;
