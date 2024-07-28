
            import { UpdateLanguageDeveloperUseCase } from "../../../../usecases/LanguageDeveloper/UpdateLanguageDeveloperUsecase"
            import { createLanguageDeveloperMock } from "../../mock-entities/LanguageDeveloper/LanguageDeveloper-mock"
            import { repositoryMock } from "../../mock-repositories/repository-mock"

            describe('UpdateLanguageDeveloperUseCase', () => {
                let usecase: UpdateLanguageDeveloperUseCase

                beforeEach(() => {
                    usecase = new UpdateLanguageDeveloperUseCase(repositoryMock)
                })
                
it('UpdateLanguageDeveloperUseCase handle', async () => {
  const mock = createLanguageDeveloperMock()
  await usecase.handle({
 id: mock.id, 
level: mock.level, 
language: mock.language, 
developerId: mock.developerId, 

    })
   expect(repositoryMock.update).toHaveBeenCalledTimes(1)
})
    
})