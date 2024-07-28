
            import { CreateDeveloperUseCase } from "../../../../usecases/Developer/CreateDeveloperUsecase"
            import { createDeveloperMock } from "../../mock-entities/Developer/Developer-mock"
            import { repositoryMock } from "../../mock-repositories/repository-mock"

            describe('CreateDeveloperUseCase', () => {
                let usecase: CreateDeveloperUseCase

                beforeEach(() => {
                    usecase = new CreateDeveloperUseCase(repositoryMock)
                })
 it('CreateDeveloperUseCase handle', async () => {
    const mock = createDeveloperMock()
    await usecase.handle({ 
 name: mock.name, 
email: mock.email, 

    })
  expect(repositoryMock.insert).toHaveBeenCalledTimes(1)
})
    
})