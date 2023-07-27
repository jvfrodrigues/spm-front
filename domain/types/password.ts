export interface Password {
  id: string;
  name: string;
  url: string;
  username: string;
  password: string;
}

export interface PasswordCreateRequest {
  name: string;
  url: string;
  username: string;
  password: string;
}
