import express from 'express'
import {
    getUsers, 
    getUserById,
    saveUser,
    updateUser,
    deleteUser,
} from  "../controllers/userController.js"
const router = express.Router()

router.get('/contacts', getUsers)
router.get('/contacts/:id', getUserById)
router.post('/contacts', saveUser)
router.patch('/contacts/:id', updateUser)
router.delete('/contacts/:id', deleteUser)


export default  router;