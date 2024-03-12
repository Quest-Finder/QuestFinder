import * as React from 'react'

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

function Discord({ ...props }: SvgComponentProps) {
  return (
    <svg
      width={24}
      height={19}
      viewBox='0 0 24 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M20.317 1.656A19.791 19.791 0 0015.432.141a.074.074 0 00-.079.037c-.21.375-.444.865-.608 1.25a18.271 18.271 0 00-5.487 0 12.643 12.643 0 00-.617-1.25.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.032.028C.533 6.332-.32 10.866.099 15.344a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.109 13.109 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.078-.01c3.927 1.792 8.18 1.792 12.061 0a.074.074 0 01.079.009c.12.099.245.198.372.292.044.033.04.1-.006.128-.598.35-1.22.645-1.873.891a.077.077 0 00-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 00.084.029 19.834 19.834 0 006.002-3.03.077.077 0 00.032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 00-.031-.029zM8.02 12.617c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.418 0 1.334-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.418 0 1.334-.946 2.42-2.157 2.42z'
        fill='#fff'
      />
    </svg>
  )
}

export default Discord
