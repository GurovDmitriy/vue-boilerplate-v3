export default function auth({ next }) {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    console.log("global guard auth")
    return next()
    // return next({name: "HomePage"})
  } else {
    return next()
  }
}
