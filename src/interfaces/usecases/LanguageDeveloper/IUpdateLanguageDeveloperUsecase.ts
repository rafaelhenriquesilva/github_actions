
          export interface IUpdateLanguageDeveloperUseCase {
              handle(input: inputUpdateLanguageDeveloper): Promise<void>
          }
 export interface inputUpdateLanguageDeveloper { 
id: string 
level: string 
language: string 
developerId: string 

}