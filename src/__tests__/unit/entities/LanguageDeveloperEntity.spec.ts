
         import { createLanguageDeveloperMock } from "../mock-entities/LanguageDeveloper/LanguageDeveloper-mock"
            
            describe('Generate a Entity LanguageDeveloper', () => {
               it('should be entity values', async () => {
                  const entity = createLanguageDeveloperMock()
expect(entity.toJson()).toEqual({
updatedAt: entity.updatedAt, 
level: entity.level, 
id: entity.id, 
language: entity.language, 
developerId: entity.developerId, 
createdAt: entity.createdAt, 

})
               })
            })