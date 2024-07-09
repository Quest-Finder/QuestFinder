import { z } from 'zod'

export const validateAboutYou = z.object({
  titulo: z.string().min(3, 'Nome é obrigatório').max(40).optional(),
  bio: z.string().min(3, 'Bio é obrigatório').max(500).optional(),
})
