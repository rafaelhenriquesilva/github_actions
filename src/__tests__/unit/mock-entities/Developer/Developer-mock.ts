
import { faker } from '@faker-js/faker' 

import { DeveloperEntity } from "../../../../entities/DeveloperEntity"

export const createDeveloperMock = () => {
  return new DeveloperEntity({name: faker.lorem.text(), 
    updatedAt: new Date(), 
    email: faker.lorem.text(), 
    id: faker.string.uuid(), 
    createdAt: new Date(), 
 
  }) 
}
