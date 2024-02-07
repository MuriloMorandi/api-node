import { createHmac, createCipheriv, createDecipheriv } from 'node:crypto'
const secretKey = process.env.SECRET_KEY || ''
const initializationVector = process.env.INITIALIZATION_VECTOR || ''

export interface ICryptoProvider {
  hash: (password: string) => Promise<string>
  compare: (password: string, hash: string) => Promise<boolean>
  hashBidirectional: (password: string) => Promise<string>
  decryptBidirectional: (hash: string) => Promise<string>
}

export class CryptoProvider implements ICryptoProvider {
  async hash(password: string): Promise<string> {
    try {
      const hmac = createHmac('sha256', secretKey)
      return hmac.update(password).digest('hex')
    } catch (err) {
      throw new Error('Could not hash')
    }
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return (await this.hash(password)) === hash
  }

  async hashBidirectional(info: string): Promise<string> {
    try {
      console.log(secretKey, initializationVector)

      const cipher = createCipheriv('aes-256-cbc', Buffer.from(secretKey), Buffer.from(initializationVector))
      let encrypted = cipher.update(info, 'utf8', 'hex')
      return (encrypted += cipher.final('hex'))
    } catch (err) {
      throw new Error('Could not hash bidirectional')
    }
  }

  async decryptBidirectional(hash: string): Promise<string> {
    try {
      const decipher = createDecipheriv('aes-256-cbc', Buffer.from(secretKey), Buffer.from(initializationVector))
      let decrypted = decipher.update(hash, 'hex', 'utf8')
      return (decrypted += decipher.final('utf8'))
    } catch (err) {
      throw new Error('Could not decrypt bidirectional')
    }
  }
}
