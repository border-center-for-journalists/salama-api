/**
* Survey.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    answers: { type: 'json' },
    user: { type: 'json' },
    type: { type: 'string' },
    results: { type: 'json' }
  }
};

