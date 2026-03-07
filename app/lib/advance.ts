type user = {
  id: number
  name: string
  email: string
  password: string
  age: number
}

type updateUser = Partial<user> // mengubah semua field menjadi optional

interface username {
  name?: string
  age?: number
}

type RequiredUsername = Required<username>

type UserLogin = {
  email: string
  password: string
  number: number
}

type emailUser = Pick<UserLogin, 'email'> // hanya memilih email

type RemoveNumber = Omit<UserLogin, 'number'> // remove

type role = 'admin' | 'user' | 'guest'

type Permisi = Record<role, boolean>

const permissions: Permisi = {
  admin: true,
  user: false,
  guest: false,
}
