export default {
  development: {
    JWT: {
      SECRET: process.env.JWT_SECRET,
      EXPIRES: process.env.JWT_EXPIRES
    },
    DB: {
      URL: process.env.DB_URL,
      OPTIONS: {
        useNewUrlParser: true
      }
    }
  },
  production: {

  },
  test: {

  },
  common: {
    PORT: process.env.PORT,
  }
}