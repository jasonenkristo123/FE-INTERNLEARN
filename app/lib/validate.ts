import Error from 'next/error'
import { z } from 'zod'

type User = z.infer<typeof userSchema>

const hobbies = ['Programming', 'Weight lifting', 'Reading'] as const

const userSchema = z
  .object({
    id: z.union([z.string(), z.number()]), // artinya id bisa antara string atau number
    username: z.string(),
    age: z.number().gt(0),
    email: z.email(),
    birthday: z.date(),
    hobbies: z.enum(hobbies),
    friends: z.array(z.string()).nonempty(),
    coordinates: z.tuple([z.number(), z.number(), z.number().gt(4).int()]),
  })
  .strict()

const user: User = {
  id: 1,
  username: 'JasZ',
  age: 21,
  email: 'jasz@gmail.com',
  birthday: new Date(),
  hobbies: 'Programming',
  friends: ['Jason', 'Habibi', 'Arfa'],
  coordinates: [1, 2, 40],
}

console.log(userSchema.parse(user))

const UserSchema2 = z.object({
  id: z.discriminatedUnion('status', [
    z.object({ status: z.literal('success'), data: z.string() }),
    z.object({ status: z.literal('error'), error: z.instanceof(Error) }),
  ]),
})
