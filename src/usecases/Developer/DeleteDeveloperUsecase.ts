
import {GlobalRepositoryInterface} from '../../interfaces/repositories/GlobalRepositoryInterface'
import { DeveloperEntity } from "../../entities/DeveloperEntity"
import { IDeleteDeveloperUseCase } from "../../interfaces/usecases/Developer/IDeleteDeveloperUsecase"

export class DeleteDeveloperUseCase implements IDeleteDeveloperUseCase {
  private repository: GlobalRepositoryInterface<DeveloperEntity>

  constructor(
    repository: GlobalRepositoryInterface<DeveloperEntity>
  ) {
    this.repository = repository
  }
  async handle(id: string): Promise<void> {
    await this.repository.deleteById(id)
  }
}
