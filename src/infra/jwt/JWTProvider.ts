import jwt from 'jsonwebtoken';

export interface IJwtProvider {
  generateToken(userId: string): Promise<string>;
  verifyToken(token: string): Promise<string>;
}


export class JwtProvider implements IJwtProvider {
  public async generateToken(userId: string) {
    const token = await jwt.sign({ sub: userId }, process.env.JWT_KEY || '', { expiresIn: process.env.JWT_EXPIRES });

    return token;
  }

  public async verifyToken(token: string) {
    try {
      const decoded: any = await jwt.verify(token, process.env.JWT_KEY || '');

      return decoded.sub;
    } catch (err) {
      throw new Error('error on verify token');
    }
  }
}
