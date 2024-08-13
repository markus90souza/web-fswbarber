'use client'
import type { FC } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { DesktopMenu } from './desktop-menu'
import { MobileMenu } from './mobile-menu'
export const Header: FC = () => {
  const isMobile = useMediaQuery('(min-width: 768px)')

  return <>{isMobile ? <DesktopMenu /> : <MobileMenu />}</>
}
