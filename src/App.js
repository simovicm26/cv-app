import "./styles/App.css";
import Info from "./components/Info";
import Education from "./components/Education";
import Practical from "./components/Practical";
function App() {
  return (
    <div className="app">
      <Info />
      <Education
        title="Education"
        school="Name of College"
        name="Study Program"
        date="Sept 2021..."
        class="education"
      />
      <Education
        title="Experience"
        school="Name of Company"
        name="What you did..."
        date="Sept 2021..."
        class="practical"
      />
    </div>
  );
}

export default App;
