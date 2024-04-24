import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const DiredtMessages = React.lazy(() => import('./views/directMessages/DirectMessages'))
const Follows = React.lazy(() => import('./views/follows/Follows'))
const Notifications = React.lazy(() => import('./views/notifications/Notifications'))
const Profiles = React.lazy(() => import('./views/profiles/Profiles'))
// const Relays = React.lazy(() => import('./views/relays/Relays'))
// const Settings = React.lazy(() => import('./views/settings/Settings'))
const MyProfile = React.lazy(() => import('./views/myProfile/MyProfile'))

// Settings
const Settings = React.lazy(() => import('./views/settings/generalSettings/GeneralSettings'))
const Relays = React.lazy(() => import('./views/settings/relays/Relays'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/directMessages', name: 'Direct Messages', element: DiredtMessages },
  { path: '/follows', name: 'Follows', element: Follows },
  { path: '/notifications', name: 'Notifications', element: Notifications },
  { path: '/profiles', name: 'Profiles', element: Profiles },
  { path: '/settings', name: 'Settings', element: Settings, exact: true },
  { path: '/settings/relays', name: 'Relays', element: Relays },
  { path: '/settings/generalSettings', name: 'Settings', element: Settings },
  { path: '/myProfile', name: 'My Profile', element: MyProfile },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
]

export default routes
