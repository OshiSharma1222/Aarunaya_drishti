const express = require('express');
const router = express.Router();
const incidentController = require('../controllers/incidentController');

// GET /api/incidents - Get all incidents
router.get('/', incidentController.getAllIncidents);

// GET /api/incidents/stats - Get incident statistics
router.get('/stats', incidentController.getIncidentStats);

// GET /api/incidents/:id - Get specific incident
router.get('/:id', incidentController.getIncidentById);

// POST /api/incidents - Create new incident report
router.post('/', incidentController.createIncident);

// PUT /api/incidents/:id/status - Update incident status
router.put('/:id/status', incidentController.updateIncidentStatus);

module.exports = router;
