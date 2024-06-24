import api from '../index.js'

class AdminOBJ {
  //Get Admin Roles
  getAdminRoles = async () => {
    try {
      // Check if data is not empty
      const response = await api.get(`api/admins/roles`)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
  //Login
  adminLogin = async (data) => {
    try {
      const response = await api.post(`api/admins/login`, data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Register
  register = async (data) => {
    try {
      const response = await api.post(`api/admins/register`, data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
  //Send Invite
  adminInvite = async (data) => {
    try {
      const response = await api.post(`api/admins/invitation`, data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Verify account
  adminVerifyAccount = async (data) => {
    try {
      const response = await api.patch(`api/admins/verify-account`, data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get app members
  getMembers = async () => {
    try {
      // Check if data is not empty

      const response = await api.get('api/users/members')
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get user's Connections
  getConnections = async () => {
    try {
      const response = await api.get(`api/users/my-connections`)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get user's Connections
  sendConnectionRequest = async (receiverId) => {
    try {
      const response = await api.put(
        `api/users/${receiverId}/connection?status=request`
      )
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get user's Connections
  handleConnectionRequest = async (receiverId, status) => {
    try {
      const response = await api.put(
        `api/users/${receiverId}/connection?status=${status}`
      )
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get user's Notifications
  getNotifications = async () => {
    try {
      const response = await api.get(`api/users/notifications`)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  // Update Single Group

  editGroup = async (params, data) => {
    try {
      // Check if data is not empty

      const response = await api.patch(`api/admin/groups/${params}`, data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
  // Update Single Forum

  editForum = async (params, data) => {
    try {
      // Check if data is not empty

      const response = await api.patch(`api/admin/forums/${params}`, data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Update Group Photo

  updateGroupPhoto = async (params, formData) => {
    try {
      const response = await api.patch(
        `/api/admin/groups/${params}/photo`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      return response.data
    } catch (err) {
      console.log(err)
      throw err?.response?.data || err.message
    }
  }

  //Update forum Photo
  updateForumPhoto = async (params, formData) => {
    try {
      const response = await api.patch(
        `/api/admin/forums/${params}/photo`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      return response.data
    } catch (err) {
      console.log(err)
      throw err?.response?.data || err.message
    }
  }
}

const admin = new AdminOBJ()
export default admin
