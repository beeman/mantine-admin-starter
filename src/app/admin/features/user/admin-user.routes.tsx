import { Route, Routes } from 'react-router-dom'
import { AdminUserDetailFeature } from './admin-user-detail-feature'
import { AdminUserListFeature } from './admin-user-list-feature'

export function AdminUserRoutes() {
  return (
    <Routes>
      <Route index element={<AdminUserListFeature />} />
      <Route path=":userId/*" element={<AdminUserDetailFeature />} />
    </Routes>
  )
}
