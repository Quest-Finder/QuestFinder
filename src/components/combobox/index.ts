import { ComboboxContent } from './combobox-content'
import { ComboboxRoot } from './combobox-root'

export const Combobox = {
  Root: ComboboxRoot,
  Content: ComboboxContent,
}

/* USAGE

  <Combobox.Root
    options={[]}
    value=''
    setValue={() => {}}
    placeholder=''
  >
    <Combobox.Content
      searchPlaceholder=''
      emptyPlaceholder=''
    />
  </Combobox.Root>

*/
