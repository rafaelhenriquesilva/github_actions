
import {GlobalRepositoryInterface} from '../../interfaces/repositories/GlobalRepositoryInterface'
import { DeveloperEntity } from "../../entities/DeveloperEntity"
import { ICreateDeveloperUseCase, inputCreateDeveloper } from "../../interfaces/usecases/Developer/ICreateDeveloperUsecase"

export class CreateDeveloperUseCase implements ICreateDeveloperUseCase {
  private repository: GlobalRepositoryInterface<DeveloperEntity>

  constructor(
    repository: GlobalRepositoryInterface<DeveloperEntity>
  ) {
    this.repository = repository
  } 
  async handle(input: inputCreateDeveloper): Promise<void> {
    await this.repository.insert({
      name: input.name, 
      email: input.email, 

    })
  }
}