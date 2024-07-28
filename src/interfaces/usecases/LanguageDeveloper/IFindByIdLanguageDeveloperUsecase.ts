
import { LanguageDeveloperEntity } from "../../../entities/LanguageDeveloperEntity"

export interface IFindByIdLanguageDeveloperUseCase {
                handle(id: string): Promise<LanguageDeveloperEntity | undefined>
            }

          