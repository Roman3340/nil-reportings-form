
import './App.css'
import Sidebar from './pages/DashboardPage/components/Sidebar/Sidebar'
import TasksStatus from './pages/DashboardPage/components/TasksStatus/TasksStatus'

function App() {
  return (
    <>
      <div className="main">
        <Sidebar />
        <TasksStatus />
      </div>
      
    </>
  )
}

export default App
