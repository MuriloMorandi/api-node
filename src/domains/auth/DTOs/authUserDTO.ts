import { ISignUpParams } from "../validations/signUpDTO";

export class AuthUserDTO {
    user: Partial<ISignUpParams>;
    token: string;

    constructor(userData: Partial<ISignUpParams>, token: string) {
        this.user = userData;
        this.token = token;
    }
}