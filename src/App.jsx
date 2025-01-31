import Banner from "./components/Banner"
import Courses from "./components/Courses"
import Notice from "./components/Notice"
import WelcomeMessage from "./components/WelcomeMessage"

const App = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner />
      <Notice />
      <WelcomeMessage />
      <Courses />
    </div>
  )
}
export default App

