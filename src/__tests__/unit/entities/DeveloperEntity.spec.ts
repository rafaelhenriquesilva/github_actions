
         import { createDeveloperMock } from "../mock-entities/Developer/Developer-mock"
            
            describe('Generate a Entity Developer', () => {
               it('should be entity values', async () => {
                  const entity = createDeveloperMock()
expect(entity.toJson()).toEqual({
name: entity.name, 
updatedAt: entity.updatedAt, 
email: entity.email, 
id: entity.id, 
createdAt: entity.createdAt, 

})
               })
            })