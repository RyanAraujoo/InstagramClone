export interface IdataForm {
  setUser(data: string, name: string, user: string, password: string): boolean;
  getUser(user: string, pass: string): boolean;
}
