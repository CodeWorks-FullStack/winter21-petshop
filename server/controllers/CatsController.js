import { catsService } from '../services/CatsService'
import BaseController from '../utils/BaseController'

export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      // call to service
      const cats = await catsService.getAll()
      return res.send(cats)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const cat = await catsService.getById(req.params.id)
      return res.send(cat)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // get info from the request, it is stored in the 'body'
      const cat = await catsService.create(req.body)
      return res.send(cat)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      // SAFETY-STEP: if the user did not pass an id in the body, it is always in the route
      req.body.id = req.params.id
      const cat = await catsService.edit(req.body)
      return res.send(cat)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await catsService.remove(req.params.id)
      res.send({ message: 'Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
