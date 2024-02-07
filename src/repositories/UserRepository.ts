import sql from "../configs/db";


export interface IUserRepository {
    create: (data: any) => Promise<any>;
    findByEmail: (email: string) => Promise<any>;
    findByCPF: (hashCPF: string) => Promise<boolean>;
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
        try
        {
            const ret = await sql`
            SELECT id FROM users WHERE email = ${email}
        `;
        
            return ret.length > 0;
        }
        catch (err)
        {
            throw new Error('Could not find email');
        }
    }

    async findByEmail(email: string): Promise<any> {
        try
        {
            
            const ret = await sql`
            SELECT * FROM users WHERE email = ${email}
            `;
            
            return ret[0];
        }
        catch (err)
        {
            throw new Error('Could not find email');
        }
    }

    async findByCPF(hashCPF: string): Promise<boolean>{
        try
        {
            const ret = await sql`
                SELECT * FROM users where cpf = ${hashCPF}
            `;

            return ret.length > 0;
        }
        catch
        {
            throw new Error('Could not find CPF')
        }
    }
}