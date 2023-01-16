import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'
import { usePathChangeScrollTop } from './hooks'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppLogin from './components/app-login'
import Feedback from './base-ui/feedback'

const App = memo(() => {
  usePathChangeScrollTop()

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="content">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      <AppLogin />

      <Feedback />
    </div>
  )
})

export default App
