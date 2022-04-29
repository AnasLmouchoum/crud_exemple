import './App.css';
import AllStudents from './component/AllStudents';
import AppBar from './component/AppBar';
import StudentForm from './component/Student';

function App() {
  return (
    <div className="App">
      <AppBar />
      <StudentForm />
      <AllStudents />
    </div>
  );
}

export default App;
