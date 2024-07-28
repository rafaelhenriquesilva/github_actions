
                import {GlobalRepositoryInterface} from '../../interfaces/repositories/GlobalRepositoryInterface'
                import { LanguageDeveloperEntity } from "../../entities/LanguageDeveloperEntity";
                import { IListAllLanguageDeveloperUseCase } from "../../interfaces/usecases/LanguageDeveloper/IListAllLanguageDeveloperUsecase";

                export class ListAllLanguageDeveloperUseCase implements IListAllLanguageDeveloperUseCase {
                    private repository: GlobalRepositoryInterface<LanguageDeveloperEntity>

                    constructor(
                        repository: GlobalRepositoryInterface<LanguageDeveloperEntity>
                    ) {
                        this.repository = repository
                    }
async handle(): Promise<LanguageDeveloperEntity[]> {
  const result = await this.repository.listAll()
  return result
}
    }
