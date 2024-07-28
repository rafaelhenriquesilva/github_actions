
import {GlobalRepositoryInterface} from '../../interfaces/repositories/GlobalRepositoryInterface'
import { LanguageDeveloperEntity } from "../../entities/LanguageDeveloperEntity"
import { ICreateLanguageDeveloperUseCase, inputCreateLanguageDeveloper } from "../../interfaces/usecases/LanguageDeveloper/ICreateLanguageDeveloperUsecase"

export class CreateLanguageDeveloperUseCase implements ICreateLanguageDeveloperUseCase {
  private repository: GlobalRepositoryInterface<LanguageDeveloperEntity>

  constructor(
    repository: GlobalRepositoryInterface<LanguageDeveloperEntity>
  ) {
    this.repository = repository
  } 
  async handle(input: inputCreateLanguageDeveloper): Promise<void> {
    await this.repository.insert({
      level: input.level, 
      language: input.language, 
      developerId: input.developerId, 

    })
  }
}