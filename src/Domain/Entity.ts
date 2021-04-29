import { injectable } from 'inversify'
import { validate } from 'class-validator'

@injectable()
export class Entity {
  public async validate (): Promise<string|unknown> {
    const details = await validate(this)
    if (details) return details
  }
}
