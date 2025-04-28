import { BrowserRouter as Router } from "react-router-dom"

import PostsManagerPage from "@/pages/PostsManagerPage.tsx"
import { AppHeader } from "@/widgets/app-header"
import { AppFooter } from "@/widgets/app-footer"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AppHeader />
        <main className="flex-grow container mx-auto px-4 py-8">
          <PostsManagerPage />
        </main>
        <AppFooter />
      </div>
    </Router>
  )
}

export default App
