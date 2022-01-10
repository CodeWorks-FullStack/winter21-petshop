import { generateId } from '../../client/app/Utils/generateId'

// JUST FOR MONDAY
export const FakeDb = {
  values: ['value 1', 'value 2'],
  cats: [{ id: generateId(), name: 'Mr. Snibbley', age: 245 }, { id: generateId(), name: 'Mittens', age: 2 }]
}
