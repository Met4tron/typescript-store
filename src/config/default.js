module.exports = {
  dev: {
    PORT: process.env.PORT,
    JWT: {
      SECRET: process.env.JWT_SECRET,
      EXPIRES: process.env.JWT_EXPIRES
    }
  },
  prod: {

  },
  test: {

  }
}