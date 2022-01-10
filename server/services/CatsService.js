import { generateId } from '../../client/app/Utils/generateId'
import { FakeDb } from '../db/FakeDB'
import { BadRequest } from '../utils/Errors'

class CatsService {
  async getAll() {
    // eventually this will be a call to MongoDB
    return FakeDb.cats
  }

  async getById(id) {
    // this will change tomorrow
    const cat = await FakeDb.cats.find(cat => cat.id === id)
    if (!cat) {
      throw new BadRequest('Invalid Id')
    }
    return cat
  }

  async create(cat) {
    // replace me
    cat.id = generateId()
    FakeDb.cats.push(cat)
    return cat
  }

  async edit(cat) {
    const original = await this.getById(cat.id)
    // change the values you want to allow changed
    original.name = cat.name || original.name
    original.age = cat.age || original.age
    // this would be where we update the db if it wasn't fake
    return original
  }

  async remove(id) {
    await this.getById(id)
    // this is not gonna work after monday
    FakeDb.cats = FakeDb.cats.filter(c => c.id !== id)
  }
}

export const catsService = new CatsService()
