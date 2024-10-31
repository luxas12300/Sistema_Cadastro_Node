export interface User{
    id: string;
    name: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}

export interface UserCreate{
    email: string;
    name: string;
}

export interface UserRepository{
    create(data:UserCreate): Promise<User>
    findByEmail(email: string): Promise<User | null>
}