
            import { CreateLanguageDeveloperUseCase } from "../../../../usecases/LanguageDeveloper/CreateLanguageDeveloperUsecase"
            import { createLanguageDeveloperMock } from "../../mock-entities/LanguageDeveloper/LanguageDeveloper-mock"
            import { repositoryMock } from "../../mock-repositories/repository-mock"

            describe('CreateLanguageDeveloperUseCase', () => {
                let usecase: CreateLanguageDeveloperUseCase

                beforeEach(() => {
                    usecase = new CreateLanguageDeveloperUseCase(repositoryMock)
                })
 it('CreateLanguageDeveloperUseCase handle', async () => {
    const mock = createLanguageDeveloperMock()
    await usecase.handle({ 
 level: mock.level, 
language: mock.language, 
developerId: mock.developerId, 

    })
  expect(repositoryMock.insert).toHaveBeenCalledTimes(1)
})
    
})