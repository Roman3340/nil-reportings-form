
import './App.css'
import Sidebar from './pages/AdminPage/Dashboard/components/Sidebar/Sidebar'
import TasksStatus from './pages/AdminPage/Dashboard/components/TasksStatus/TasksStatus'
import Tasks from './pages/AdminPage/Dashboard/components/Tasks/Tasks'

function App() {
  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="rightPart">
          <TasksStatus />
          <Tasks />
        </div>
      </div>
      
    </>
  )
}

export default App
