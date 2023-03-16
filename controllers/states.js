const States = require('../models/states');

exports.createStates = async (req, res) => {
  const { state, cities, code } = req.body;
  const query = { state: state, cities: cities, code: code }
  try {
    const states = await States.create(query);
    res.status(200).json({ states: states });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getStates = async (req, res) => {
  try {
    const states = await States.find({});
    res.status(200).json({ states: states })
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

exports.getOneState = async (req, res) => {
  const { state } = req.body;
  const query = { State: state }
  try {
    const singleState = await States.find(query);
    res.status(200).json({ state: singleState });
  } catch (error) {
    res.status(500).json({ error: error })
  }
}