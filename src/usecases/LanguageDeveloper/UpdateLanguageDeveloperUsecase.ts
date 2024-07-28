
        import {GlobalRepositoryInterface} from '../../interfaces/repositories/GlobalRepositoryInterface'
        import { LanguageDeveloperEntity } from "../../entities/LanguageDeveloperEntity";
        import { inputUpdateLanguageDeveloper, IUpdateLanguageDeveloperUseCase } from "../../interfaces/usecases/LanguageDeveloper/IUpdateLanguageDeveloperUsecase";

        export class UpdateLanguageDeveloperUseCase implements IUpdateLanguageDeveloperUseCase {
            private repository: GlobalRepositoryInterface<LanguageDeveloperEntity>

            constructor(
                repository: GlobalRepositoryInterface<LanguageDeveloperEntity>
            ) {
                this.repository = repository
            }async handle(input: inputUpdateLanguageDeveloper): Promise<void> {
      await this.repository.update({
id: input.id, 
level: input.level, 
language: input.language, 
developerId: input.developerId, 

  })
}}