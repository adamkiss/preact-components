const {h} = require('preact')
const reshape = require('reshape')
const ssr = require('..')
const test = require('ava')

test('basic', (t) => {
  const MyComponent = ({ foo }) => {
    return h('p', {}, `the value of foo is "${foo}"`)
  }

  const html = "<my-component foo='bar' />"

  return reshape({ plugins: [ssr({ 'my-component': MyComponent })] })
    .process(html)
    .then((res) => {
      t.is(res.output(), '<p>the value of foo is "bar"</p>')
    })
})
