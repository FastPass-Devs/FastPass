const srp = require('./srp'),
  params = srp.params[4096];

Meteor.methods({
  'addAccount'(salt, identity, password) {
    let verifier = srp.computeVerifier(params, Buffer.from(salt), Buffer.from(identity), Buffer.from(password));
    const userID = Accounts.createUser({ email: identity, password: verifier });
    Meteor.users.update(userID, {
      $set: {
        salt: salt
      }
    });    
  }
})