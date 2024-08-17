const Card = require("../models/Card");

exports.createCard = async (req, res) => {
    try {
        const { title, description } = req.body;

        const card = new Card({ title, description });
        await card.save();

        res.status(201).json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all cards
exports.getAllCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a card by title
exports.getCardByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const card = await Card.find({ title: { $regex: title, $options: 'i' } }); 
        
        if (card.length === 0) {
            return res.status(404).json({ message: 'No card found with the given title' });
        }
        
        res.json(card);
    } catch (error) {
        console.error('Error fetching card by title:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
