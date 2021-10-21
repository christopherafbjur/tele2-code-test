const Joi = require("joi");

const validation = Joi.object({
  simulations: Joi.number().required(),
  doorChange: Joi.boolean().required(),
});

module.exports = async function(req, res, next){
    try {
        await validation.validateAsync(req.body, { abortEarly: false });
        next();
      } catch (ex) {
        if (!ex.details) return res.sendStatus(500);
        return res.status(500).json(ex.details.map(detail => detail.message))
      }
}