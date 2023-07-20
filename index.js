const bonsoir = require('./bonsoir');

module.exports = {
    bonsoir,
    elliot: () => console.log(bonsoir('elliot'))
}
