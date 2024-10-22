import type { GameProfileType } from '@/@types'

export function getGameProfileOptionColor(value: GameProfileType) {
  const colors = {
    exploration:
      'bg-green-600/10 border-green-600/25 data-[selected=true]:bg-green-600/25 data-[selected=true]:border-green-600',
    'kill-and-loot':
      'bg-yellow-600/10 border-yellow-600/25 data-[selected=true]:bg-yellow-600/25 data-[selected=true]:border-yellow-600',
    'role-playing':
      'bg-purple-600/10 border-purple-600/25 data-[selected=true]:bg-purple-600/25 data-[selected=true]:border-purple-600',
  } as const

  return colors[value]
}
