module.exports = (on, config) => {
on (task, {
  'log out' :  () => {
    return 'hello';
  }
})
}