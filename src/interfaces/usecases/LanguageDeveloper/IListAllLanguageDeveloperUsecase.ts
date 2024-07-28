
            import { LanguageDeveloperEntity } from "../../../entities/LanguageDeveloperEntity";

            export interface IListAllLanguageDeveloperUseCase {
                handle(): Promise<LanguageDeveloperEntity[]>
            }

          