const express = require('express');
const router = express.Router();

//Register user
router.post('/register', (req, res) => {
});

//Login user
router.post('/login', (req, res) => {
});

//Search games by name
router.get ('/games/:name', (req, res) => {
});

//View list games
router.get('/lists/:listId', (req, res) => {
}
);

//Add game to list
router.post('/lists/:listId/games', (req, res) => {
});