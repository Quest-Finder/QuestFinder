import { Separator } from '../ui/separator'
import { UserInformation } from './UserInformation'

export function UserIntroduction() {
  return (
    <>
      <UserInformation.UserTitle
        userName=''
        userClass=''
        userRole=''
      />
      <Separator />
      <UserInformation.Quote>Alguma frase muito leggal</UserInformation.Quote>
      <UserInformation.Section>
        <UserInformation.SectionTitle title='Bio' />
        <UserInformation.Bio>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          earum perferendis asperiores itaque culpa ratione nihil optio,
          temporibus omnis doloremque dolor consequuntur, accusamus suscipit
          labore quisquam, eum laudantium dolorum explicate.
        </UserInformation.Bio>
      </UserInformation.Section>
    </>
  )
}
