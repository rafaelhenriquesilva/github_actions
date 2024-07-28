
import { faker } from '@faker-js/faker'

import { LanguageDeveloperEntity } from "../../../../entities/LanguageDeveloperEntity"

export const createLanguageDeveloperMock = () => {
  return new LanguageDeveloperEntity({
    updatedAt: new Date(),
    level: faker.lorem.text(),
    id: faker.string.uuid(),
    language: faker.lorem.text(),
    developerId: faker.string.uuid(),
    createdAt: new Date(),

  })
}
