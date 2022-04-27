import { ReactNode } from 'react'
import classnames from 'classnames'

type Props = {
  children?: ReactNode
  value: string
  width?: number
  onClick: (value: string) => void
  isConnected?: boolean
}

export const ActionButton = ({
  children,
  width = 120,
  value,
  onClick,
  isConnected,
}: Props) => {
  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white',
    {
      'bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400':
        isConnected,
      'bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white':
        !isConnected,
    }
  )

  const styles = {
    width: `${width}px`,
    height: '35px',
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button style={styles} className={classes} onClick={handleClick}>
      {children || value}
    </button>
  )
}
