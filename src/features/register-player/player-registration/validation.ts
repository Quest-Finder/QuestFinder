import { filter } from '@/helpers/badWordsFilter/badWordsFilter'
import moment from 'moment'
import * as z from 'zod'
import { checkUniqueUsername } from './helper/checkUniqueUsername'

export const FormStepOneSchema = z.object({
  name: z
    .string()
    .min(1, 'Campo obrigatório')
    .min(3, 'Nome deve conter no minimo 3 caracteres')
    .max(30, 'Nome deve conter no máximo 30 caracteres')
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/,
      'Caracteres especiais e numeros não são disponiveis',
    )
    .regex(/\w+(?:\s+\w+)+/, 'Necessário preencher nome e sobrenome'),
  username: z
    .string()
    .min(1, 'Campo obrigatório')
    .max(15, 'O username deve conter no máximo 15 caracteres')
    .regex(/^[a-zA-Z0-9'-]*$/, 'Caracteres especiais não são disponiveis')
    .refine(username => checkUniqueUsername(username), {
      message: 'Username ja existente',
    })
    .refine(username => !filter.isProfane(username), {
      message: 'Palavras de baixo calão não são permitidas',
    }),
  pronoun: z.string(),
  dateOfBirth: z
    .string()
    .min(10, 'Campo obrigatório')
    .refine(
      dateOfBirth => {
        return moment(dateOfBirth, 'MM-DD-YYYY', true).isValid()
      },
      {
        message: 'Data invalida',
      },
    ),
})

export type FormStepOneType = z.infer<typeof FormStepOneSchema>
