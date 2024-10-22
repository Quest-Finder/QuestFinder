import Filter from 'bad-words'

import { portugueseBadWords } from '@/utils'

const filterBadWords = new Filter()

filterBadWords.addWords(...portugueseBadWords)

export { filterBadWords }
