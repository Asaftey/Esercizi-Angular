
export enum Role {
    STAFF = "STAFF",
    STUDENT = "STUDENT",
    MANAGER = "MANAGER",
    ADMIN = "ADMIN"
}

 export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}
export interface IsUser {
    id:number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address:{ city: string; street: string; postalCode: string; }
    role: Role;
    username: string,
    profilePhotoUrl: string,
    gender: Gender
}
