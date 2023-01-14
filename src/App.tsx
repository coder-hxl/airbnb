import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'

import routes from './router'
import { RootState } from './store'
import { usePathChangeScrollTop } from './hooks'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppLogin from './components/app-login'
import Feedback from './base-ui/feedback'

const App = memo(() => {
  const { loginConfig } = useSelector(
    (state: RootState) => ({
      loginConfig: state.main.loginConfig
    }),
    shallowEqual
  )
  const { showLogin } = loginConfig

  usePathChangeScrollTop()

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="content">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      {showLogin && <AppLogin />}

      <Feedback />
    </div>
  )
})

export default App
