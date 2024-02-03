import { createHmac, createCipheriv, createDecipheriv } from 'node:crypto';
const secretKey = process.env.SECRET_KEY || 'secrets';

export interface ICryptoProvider{
    hash: (password: string) => Promise<string>;
    compare: (password: string, hash: string) => Promise<boolean>;
    hashBidirectional: (password: string) => Promise<string>;
    decryptBidirectional: (hash: string) => Promise<string>;
}

export class CryptoProvider implements ICryptoProvider{
    iv = Buffer.alloc(32);

    async hash(password: string): Promise<string>{
        const hmac = createHmac('sha256', secretKey);
        return hmac.update(password).digest('hex');
    }

    async compare(password: string, hash: string): Promise<boolean>{
        return await this.hash(password) === hash;
    }

    async hashBidirectional(info: string): Promise<string> {
        
        const cipher = createCipheriv('sha256', secretKey , this.iv); 
        console.log('info', info);
        let encrypted = cipher.update(info, 'utf8', 'hex');
        return encrypted += cipher.final('hex');
    }

    async decryptBidirectional(hash: string): Promise<string> {
        const decipher = createDecipheriv('aes-256-cbc', secretKey, this.iv);
        let decrypted = decipher.update(hash, 'hex', 'utf8');
        return decrypted += decipher.final('utf8');
    }
}