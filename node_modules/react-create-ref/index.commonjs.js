var React = require('react')

module.exports = React.createRef || function createRef() {
  var ref = function(_) { ref.current = _ }
  ref(null)
  return ref
}
