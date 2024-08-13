import type { FC } from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

export const MobileMenu: FC = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" alt="logo" width={120} height={18} />
        <Button variant={'outline'} size={'icon'}>
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
