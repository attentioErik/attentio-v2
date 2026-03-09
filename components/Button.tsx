import Link from 'next/link'
import styles from './Button.module.css'

type ButtonProps = {
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md'
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  id?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  id,
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], styles[`size${size.toUpperCase()}`], className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick} id={id}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} id={id}>
      {children}
    </button>
  )
}
