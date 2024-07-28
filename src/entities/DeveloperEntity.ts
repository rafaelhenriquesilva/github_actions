
import { DeveloperDTO } from '../dto/DeveloperDTO'
export class DeveloperEntity {

  private readonly _name: string
  private readonly _updatedAt: Date
  private readonly _email: string
  private readonly _id: string
  private readonly _createdAt: Date

  constructor(dto: DeveloperDTO) {
    this._name = dto.name
    this._updatedAt = dto.updatedAt
    this._email = dto.email
    this._id = dto.id
    this._createdAt = dto.createdAt
  }

  public get name(): string {
    return this._name
  }

  public get updatedAt(): Date {
    return this._updatedAt
  }

  public get email(): string {
    return this._email
  }

  public get id(): string {
    return this._id
  }

  public get createdAt(): Date {
    return this._createdAt
  }
  toJson(): DeveloperDTO {
    return {
      name: this.name,
      updatedAt: this.updatedAt,
      email: this.email,
      id: this.id,
      createdAt: this.createdAt,
    }
  }
}