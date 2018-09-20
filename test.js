try {
  require('./index')(['token', 'password'])
  console.log('Looks good!')
} catch (error) {
  console.error(error)
}
