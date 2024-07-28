
import {GlobalRepositoryInterface} from '../../interfaces/repositories/GlobalRepositoryInterface'
import { DeveloperEntity } from "../../entities/DeveloperEntity"
import { IFindByIdDeveloperUseCase } from "../../interfaces/usecases/Developer/IFindByIdDeveloperUsecase"

export class FindByIdDeveloperUseCase implements IFindByIdDeveloperUseCase {
  private repository: GlobalRepositoryInterface<DeveloperEntity>

  constructor(
    repository: GlobalRepositoryInterface<DeveloperEntity>
  ) {
    this.repository = repository
  }
  async handle(id: string): Promise<DeveloperEntity | undefined> {
    const result = await this.repository.findById(id)
    if (result.length === 0) return undefined
    return result[0]
  }
} 
