const express  = require('express')

const router = express.Router()

const {addLeave, getLeaves, getLeaveById, editLeave,deleteLeave}  = require('../controllers/leaveController')


// @ /api/leaves/add

router.post('/add', addLeave)

// @ /api/leaves
router.get('/', getLeaves)


// @ /api/leaves/123
router.get('/:id', getLeaveById)



// @ /api/leaves/123
router.put('/:id', editLeave)



// @ /api/leaves/123
router.delete('/:id', deleteLeave)


module.exports = router