const simulateGames = require("../lib/game");

module.exports = async function (req, res) {
  const { simulations, doorChange } = req.body;
  const result = simulateGames(simulations, doorChange);

  res.status(200).json(result);
};
