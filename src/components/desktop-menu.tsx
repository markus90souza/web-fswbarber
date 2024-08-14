import type { FC } from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, UserRoundIcon } from 'lucide-react'
import { Button } from './ui/button'

export const DesktopMenu: FC = () => {
  return (
    <header>
      <Card>
        <CardContent className="flex max-w-7xl mx-auto flex-row items-center justify-between py-8">
          <Image src="/logo.png" alt="logo" width={120} height={18} />

          <div className="flex flex-row items-center gap-6">
            <Link href="/agendamentos" className="flex flex-row gap-2">
              <CalendarIcon />
              Agendamentos
            </Link>

            <Button>
              <UserRoundIcon />
              Perfil
            </Button>
          </div>
        </CardContent>
      </Card>
    </header>
  )
}
