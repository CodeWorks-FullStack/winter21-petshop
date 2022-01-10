import { dbContext } from '../db/DbContext.js'
import { FakeDb } from '../db/FakeDB.js'

class ValuesService {
  async create(valueData) {
    // const value = await dbContext.Values.create(valueData)

  }

  async find(query = {}) {
    // const values = await dbContext.Values.find(query)
    return FakeDb.values
  }

  async remove(valueId) {
    const removedValue = await dbContext.Values.findByIdAndRemove(valueId)
    return removedValue
  }
}

export const valuesService = new ValuesService()
