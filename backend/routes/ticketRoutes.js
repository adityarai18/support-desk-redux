const express = require('express');
const router = express.Router();

const {
  createTicket,
  getTickets,
  getTicket,
  deleteTicket,
  updateTicket,
} = require('../controller/ticketController');

const { protect } = require('../middleware/authMiddleware');

// Re-route into noteRouter
const noteRouter = require('./noteRoutes');
router.use('/:ticketId/notes', noteRouter);

router.route('/').get(protect, getTickets).post(protect, createTicket);

router
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

module.exports = router;