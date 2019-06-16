
'use strict'

const Database = use('Database')

class HomeController {
 
  async index({view}) {
  
    const tirebrands = await Database.select('*').from('tirebrands')
    const categories = await Database.select('*').from('categories')

  return view.render('index', {
    title: 'Tire stack',
    tirebrands: tirebrands,
    categories:categories
  })
}


}
module.exports = HomeController
