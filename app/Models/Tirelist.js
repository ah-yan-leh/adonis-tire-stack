'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tirelist extends Model {
    static get table () {
        return 'tirelist'
  }
}

module.exports = Tirelist
