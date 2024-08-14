'use client'
import type { FC } from 'react'

import { Card, CardContent } from './ui/card'
export const Footer: FC = () => {
  return (
    <footer className="w-full mx-auto">
      <Card>
        <CardContent className="px-5 py-6 gap-2 flex items-center justify-center w-full">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} Todos os direitos reservados.
            <span className="mr-2">FSW Barber</span>
          </span>
        </CardContent>
      </Card>
    </footer>
  )
}
