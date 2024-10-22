import { z } from 'zod'

export const addressFormSchema = z
  .object({
    state: z.string(),
    city: z.string(),
    liveAbroad: z.boolean().optional(),
  })
  // If a state is selected, the city field must not be empty.
  .refine(data => !(data.state.length >= 1 && !data.city))
  // If liveAbroad is unchecked, the state field must not be empty.
  .refine(data => !(data.liveAbroad !== true && data.state.length <= 0))

export type AddressFormSchema = z.infer<typeof addressFormSchema>

export const addressDefaultValues: AddressFormSchema = {
  state: '',
  city: '',
  liveAbroad: false,
}
