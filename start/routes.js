'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('index')

Route.get('/', 'HomeController.index')
Route.on('/vue-demo').render('vue-demo')
// Route.on('/installers').render('mock-installers2')

Route.get('categories', 'CategoryController.index')
Route.get('tirebrands', 'TirebrandController.index')

Route.get('accessories', 'AccessoryController.index')
Route.get('lawnsizes', 'LawnsizeController.index')
Route.get('lawntrailerbrands', 'LawntrailerbrandController')
Route.get('tirelist', 'TirelistController.index')
Route.get('tiresizeresults', 'TirelistController.results')
Route.get('tire-info/:display_ads_id', 'TirelistController.show')

Route.get('tire-sizes', 'TiresizeController.index')
Route.get('trailer-tire-list', 'TrailerlistController.index')
Route.get('trailer-tire-size-list', 'TrailersizeController.index')
Route.get('wheel-brands', 'WheelbrandController.index')
Route.get('wheel-lists', 'WheellistController.index')
Route.get('wheel-sizes', 'WheelsizeController.index')
