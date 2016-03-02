/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {

    res.json({
      service: 'salama api',
      version: '0.0.1',
      documentation: 'http://github.com/spaceship-labs/salama-api',
      description: 'contains information about sub-national public debt in Mexico'
    });

  },


};
