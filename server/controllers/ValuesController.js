import { valuesService } from '../services/ValueService'
import BaseController from '../utils/BaseController'

// Class name MUST MATCH THE FILENAME (case sensitive)
// extends is Inheritance (gets all members [aka. properties and methods] of a parent class)
export class ValuesController extends BaseController {
  constructor() {
    // Determines the path or route name (base: localhost:3000, path: /api/values)
    // Name on the door
    super('api/values')
    // routes are suppored request types followed by path extension
    this.router
      // type: GET, path: 'api/values', extension: ''
      .get('', this.getAll)
      .post('', this.create)
      // the params, get defined in the route path with a ':SOMEVARIABLE'
      .delete('/:valueId', this.remove)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req 'Knight: request from the client'
   * @param {import("express").Response} res 'How we send the knight home (response)'
   * @param {import("express").NextFunction} next 'sends the knight/request down the hallway'
   */
  async getAll(req, res, next) {
    try {
      const values = await valuesService.find()
      return res.send(values)
    } catch (error) {
      // attaches error to the request which will be handled by the error handler
      next(error)
    }
  }

  /**
   * Creates a value from request body and returns it
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      // const value = await valuesService.create(req.body)
      console.log(req.body)
      // res.send(value)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Deletes a value using req params
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async remove(req, res, next) {
    try {
      // the params, get defined in the route path with a ':SOMEVARIABLE'
      const value = await valuesService.remove(req.params.valueId)
      res.send(value)
    } catch (error) {
      next(error)
    }
  }
}
