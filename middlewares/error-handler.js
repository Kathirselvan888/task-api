const { CustomAPIError } = require('../errors/custom-erroe')

const errorHandlerMiddleWare = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res
    .status(500)
    .json({ msg: `Somthing went worng, please try again later` })
}

module.exports = errorHandlerMiddleWare
