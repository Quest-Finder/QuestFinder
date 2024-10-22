'use client'

import { type DialogProps } from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'
import * as React from 'react'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { normalizeText } from '@/helpers'
import { cn } from '@/lib/utils'

export interface CommandRootProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive> {}

const CommandRoot = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  CommandRootProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex size-full flex-col rounded-lg bg-background text-foreground dark:bg-background-soft',
      className,
    )}
    filter={(value, search, keywords) => {
      const normalizedValue = normalizeText(value)
      const normalizedKeywords = keywords
        ? normalizeText(keywords.join(' '))
        : undefined
      const normalizedSearch = normalizeText(search)
      const extendValue = `${normalizedValue} - ${normalizedKeywords}`

      if (extendValue.includes(normalizedSearch)) return 1
      return 0
    }}
    {...props}
  />
))
CommandRoot.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

function CommandDialog({ children, ...props }: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className='p-0 shadow-lg'>
        <CommandRoot className='[&_[cmdk-group]]:p-2 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:py-2 [&_[cmdk-item]_svg]:size-5'>
          {children}
        </CommandRoot>
      </DialogContent>
    </Dialog>
  )
}

export interface CommandInputProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, ...props }, ref) => {
  const inputClasses = {
    base: 'flex h-10 w-full rounded-lg bg-transparent py-3 text-sm outline-none placeholder:text-foreground-support',
    status: 'disabled:cursor-not-allowed disabled:opacity-50',
  }

  return (
    <div className='flex items-center gap-2 border-b border-border px-3'>
      <Search className='size-4 shrink-0 opacity-50' />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(inputClasses.base, inputClasses.status, className)}
        {...props}
      />
    </div>
  )
})

CommandInput.displayName = CommandPrimitive.Input.displayName

export interface CommandListProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> {}

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  CommandListProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-80 overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className='p-4 text-sm'
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

export interface CommandGroupProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> {}

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  CommandGroupProps
>(({ className, ...props }, ref) => {
  const groupClasses = {
    base: 'overflow-hidden p-1 text-foreground',
    heading:
      '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-foreground-soft/80',
  }

  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(groupClasses.base, groupClasses.heading, className)}
      {...props}
    />
  )
})

CommandGroup.displayName = CommandPrimitive.Group.displayName

export interface CommandSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> {}

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparatorProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

export interface CommandItemProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> {}

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, ...props }, ref) => {
  const itemClasses = {
    base: 'flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none [&>svg]:size-4',
    state:
      'data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
  }

  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(itemClasses.base, itemClasses.state, className)}
      {...props}
    />
  )
})
CommandItem.displayName = CommandPrimitive.Item.displayName

export interface CommandShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

function CommandShortcut({ className, ...props }: CommandShortcutProps) {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  )
}
CommandShortcut.displayName = 'CommandShortcut'

export const Command = {
  Root: CommandRoot,
  Dialog: CommandDialog,
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Shortcut: CommandShortcut,
  Separator: CommandSeparator,
}
