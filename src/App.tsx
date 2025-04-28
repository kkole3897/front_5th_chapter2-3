import { BrowserRouter as Router } from "react-router-dom"

import { HomePage } from "@/pages/home"
import { AppHeader } from "@/widgets/app-header"
import { AppFooter } from "@/widgets/app-footer"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AppHeader />
        <main className="flex-grow container mx-auto px-4 py-8">
          <HomePage />
        </main>
        <AppFooter />
      </div>
    </Router>
  )
}

export default App
