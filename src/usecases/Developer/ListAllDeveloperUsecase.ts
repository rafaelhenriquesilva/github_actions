
                import {GlobalRepositoryInterface} from '../../interfaces/repositories/GlobalRepositoryInterface'
                import { DeveloperEntity } from "../../entities/DeveloperEntity";
                import { IListAllDeveloperUseCase } from "../../interfaces/usecases/Developer/IListAllDeveloperUsecase";

                export class ListAllDeveloperUseCase implements IListAllDeveloperUseCase {
                    private repository: GlobalRepositoryInterface<DeveloperEntity>

                    constructor(
                        repository: GlobalRepositoryInterface<DeveloperEntity>
                    ) {
                        this.repository = repository
                    }
async handle(): Promise<DeveloperEntity[]> {
  const result = await this.repository.listAll()
  return result
}
    }
