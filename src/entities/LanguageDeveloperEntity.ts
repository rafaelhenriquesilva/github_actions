
import { LanguageDeveloperDTO } from '../dto/LanguageDeveloperDTO'
export class LanguageDeveloperEntity {

  private readonly _updatedAt: Date
  private readonly _level: string
  private readonly _id: string
  private readonly _language: string
  private readonly _developerId: string
  private readonly _createdAt: Date

  constructor(dto: LanguageDeveloperDTO) {
    this._updatedAt = dto.updatedAt
    this._level = dto.level
    this._id = dto.id
    this._language = dto.language
    this._developerId = dto.developerId
    this._createdAt = dto.createdAt
  }

  public get updatedAt(): Date {
    return this._updatedAt
  }

  public get level(): string {
    return this._level
  }

  public get id(): string {
    return this._id
  }

  public get language(): string {
    return this._language
  }

  public get developerId(): string {
    return this._developerId
  }

  public get createdAt(): Date {
    return this._createdAt
  }
  toJson(): LanguageDeveloperDTO {
    return {
      updatedAt: this.updatedAt,
      level: this.level,
      id: this.id,
      language: this.language,
      developerId: this.developerId,
      createdAt: this.createdAt,
    }
  }
}