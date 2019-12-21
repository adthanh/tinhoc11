export class LoginRequest {
    grant_type : string;
    client_id : number;
    client_secret: string;
    username: string;
    password: string;
    scope : string;
}