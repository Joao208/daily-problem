const reply = require('reply')
const scripts = require('./scripts')

const opts = {
  day: {
    options: Object.keys(scripts),
  },
}

reply.get(opts, (_err, answers) => {
  scripts[answers.day]()
})
