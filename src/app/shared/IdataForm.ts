export interface IdataForm {
  setUser(data: string, name: string, user: string, password: string): void,
  getUser(user: string, pass: string): void
}
