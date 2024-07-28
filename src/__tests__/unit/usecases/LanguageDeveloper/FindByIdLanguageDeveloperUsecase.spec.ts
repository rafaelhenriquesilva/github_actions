
import { FindByIdLanguageDeveloperUseCase } from "../../../../usecases/LanguageDeveloper/FindByIdLanguageDeveloperUsecase"
import { createLanguageDeveloperMock } from "../../mock-entities/LanguageDeveloper/LanguageDeveloper-mock"
import { repositoryMock } from "../../mock-repositories/repository-mock"

describe('FindByIdLanguageDeveloperUseCase', () => {
    let usecase: FindByIdLanguageDeveloperUseCase

    beforeEach(() => {
        usecase = new FindByIdLanguageDeveloperUseCase(repositoryMock)
    })
  it('FindByIdLanguageDeveloperUseCase handle', async () => {
        const mock = createLanguageDeveloperMock()
        repositoryMock.findById.mockResolvedValue([mock])
        await usecase.handle(mock.id)

        expect(repositoryMock.findById).toHaveBeenCalledTimes(1)
  })
    })