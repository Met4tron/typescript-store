declare module Express {
  interface Request {
    userId: string | undefined
  }

  interface Response {
    userId: string | undefined
  }
}