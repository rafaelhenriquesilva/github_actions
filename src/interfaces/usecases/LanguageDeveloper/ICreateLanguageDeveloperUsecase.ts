
export interface ICreateLanguageDeveloperUseCase {
              handle(input: inputCreateLanguageDeveloper): Promise<void>
          }
export interface inputCreateLanguageDeveloper { 
level: string 
language: string 
developerId: string 

}