
import {GlobalRepositoryInterface} from '../../interfaces/repositories/GlobalRepositoryInterface'
import { DeveloperEntity } from "../../entities/DeveloperEntity"
import { inputUpdateDeveloper, IUpdateDeveloperUseCase } from "../../interfaces/usecases/Developer/IUpdateDeveloperUsecase"

export class UpdateDeveloperUseCase implements IUpdateDeveloperUseCase {
  private repository: GlobalRepositoryInterface<DeveloperEntity>

  constructor(
    repository: GlobalRepositoryInterface<DeveloperEntity>
  ) {
    this.repository = repository
  }async handle(input: inputUpdateDeveloper): Promise<void> {
    await this.repository.update({
      id: input.id, 
      name: input.name, 
      email: input.email, 

    })
  }}