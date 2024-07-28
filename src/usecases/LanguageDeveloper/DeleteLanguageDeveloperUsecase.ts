
import {GlobalRepositoryInterface} from '../../interfaces/repositories/GlobalRepositoryInterface'
import { LanguageDeveloperEntity } from "../../entities/LanguageDeveloperEntity"
import { IDeleteLanguageDeveloperUseCase } from "../../interfaces/usecases/LanguageDeveloper/IDeleteLanguageDeveloperUsecase"

export class DeleteLanguageDeveloperUseCase implements IDeleteLanguageDeveloperUseCase {
  private repository: GlobalRepositoryInterface<LanguageDeveloperEntity>

  constructor(
    repository: GlobalRepositoryInterface<LanguageDeveloperEntity>
  ) {
    this.repository = repository
  }
  async handle(id: string): Promise<void> {
    await this.repository.deleteById(id)
  }
}
