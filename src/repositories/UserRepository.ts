import { log } from "console";
import sql from "../configs/db";


export interface IUserRepository {
    create:(data:any) => Promise<any>;
}

export class UserRepository implements IUserRepository{
    
    async create(data: any): Promise<any>{
        try
        {
            Object.keys(data).forEach(key => {
                if (data[key] === undefined || null) {
                    delete data[key];
                }
            }); 

            const ret = await sql`
                INSERT INTO users ${sql(data)}
                RETURNING id, INITCAP(name) AS name, email, cpf
            `;

            return ret[0];
        }
        catch (err)
        {
            throw new Error('Could not create users');
        }
    }

    async hasEmail(email: string): Promise<boolean> {
        const ret = await sql`
            SELECT id FROM users WHERE email = ${email}
        `;
        
        return ret.length > 0;
    }
}