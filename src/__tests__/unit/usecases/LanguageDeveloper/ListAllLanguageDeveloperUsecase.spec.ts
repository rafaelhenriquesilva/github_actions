
import { ListAllLanguageDeveloperUseCase } from "../../../../usecases/LanguageDeveloper/ListAllLanguageDeveloperUsecase"
import { repositoryMock } from "../../mock-repositories/repository-mock"

describe('ListAllLanguageDeveloperUseCase', () => {
  let usecase: ListAllLanguageDeveloperUseCase

  beforeEach(() => {
    usecase = new ListAllLanguageDeveloperUseCase(repositoryMock)
  })
  it('ListAllLanguageDeveloperUseCase handle', async() => {
    await usecase.handle()

    expect(repositoryMock.listAll).toHaveBeenCalledTimes(1)
  })
})