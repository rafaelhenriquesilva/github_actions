
           import { DeleteLanguageDeveloperUseCase } from "../../../../usecases/LanguageDeveloper/DeleteLanguageDeveloperUsecase"
            import { createLanguageDeveloperMock } from "../../mock-entities/LanguageDeveloper/LanguageDeveloper-mock"
            import { repositoryMock } from "../../mock-repositories/repository-mock"

            describe('DeleteLanguageDeveloperUseCase', () => {
                let usecase: DeleteLanguageDeveloperUseCase

                beforeEach(() => {
                    usecase = new DeleteLanguageDeveloperUseCase(repositoryMock)
                })
 it('DeleteLanguageDeveloperUseCase handle', async () => {
    const mock = createLanguageDeveloperMock()
    await usecase.handle(mock.id)
      expect(repositoryMock.deleteById).toHaveBeenCalledTimes(1)
  })
    })