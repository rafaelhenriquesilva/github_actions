
                import {GlobalRepositoryInterface} from '../../interfaces/repositories/GlobalRepositoryInterface'
                import { LanguageDeveloperEntity } from "../../entities/LanguageDeveloperEntity";
                import { IFindByIdLanguageDeveloperUseCase } from "../../interfaces/usecases/LanguageDeveloper/IFindByIdLanguageDeveloperUsecase";

                export class FindByIdLanguageDeveloperUseCase implements IFindByIdLanguageDeveloperUseCase {
                    private repository: GlobalRepositoryInterface<LanguageDeveloperEntity>

                    constructor(
                        repository: GlobalRepositoryInterface<LanguageDeveloperEntity>
                    ) {
                        this.repository = repository
                    }
 async handle(id: string): Promise<LanguageDeveloperEntity | undefined> {
                        const result = await this.repository.findById(id)
                        if (result.length === 0) return undefined
                        return result[0]
                    }
    } 
