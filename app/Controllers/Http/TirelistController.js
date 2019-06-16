'use strict'

const Tirelist = use('App/Models/Tirelist')
const Database = use('Database')
class TirelistController {
  async index ({response}) {
    let books = await Tirelist.all()

    return response.json(books)
  }

  async results ({params, view, request,response}) {
    //tire-search-results
    //Product_size_A

    const tirebrands = await Database.select('*').from('tirebrands')
    // const t2 = await Database.from('tirelist').where('Product_size_B', request.all().Product_size_B)
    const tiresizes = await Tirelist
                      .query()
                      .where('Product_size_B', request.all().Product_size_B)
                      .fetch()
                      
    // return response.json(tiresizes)
    return view.render('list-page', {
        title: `Tire size ${request.all().Product_size_B} `,
        tiresizes: tiresizes.toJSON(),
        tirebrands: tirebrands
      })
  }

  async show ({params, view, response}) {
    const tires = await Tirelist
                          .query()
                          .where('display_ads_id', params.display_ads_id)
                          .fetch()

    console.log(params)
    // return response.json(tires)
    return view.render('detail-page', {
        title: "Tire detail",
        tires: tires.toJSON()
      })
  }

  async store ({request, response}) {
    const bookInfo = request.only(['title', 'isbn', 'publisher_name', 'author_name'])

    const book = new Tirelist()
    book.title = bookInfo.title
    book.isbn = bookInfo.isbn
    book.publisher_name = bookInfo.publisher_name
    book.author_name = bookInfo.author_name

    await book.save()

    return response.status(201).json(book)
  }

  async update ({params, request, response}) {
    const bookInfo = request.only(['title', 'isbn', 'publisher_name', 'author_name'])

    const book = await Tirelist.find(params.id)
    if (!book) {
      return response.status(404).json({data: 'Resource not found'})
    }
    book.title = bookInfo.title
    book.isbn = bookInfo.isbn
    book.publisher_name = bookInfo.publisher_name
    book.author_name = bookInfo.author_name

    await book.save()

    return response.status(200).json(book)
  }

  async delete ({params, response}) {
    const book = await Tirelist.find(params.id)
    if (!book) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await book.delete()

    return response.status(204).json(null)
  }
}
module.exports = TirelistController
