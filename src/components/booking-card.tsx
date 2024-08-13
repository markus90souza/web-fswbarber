import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarImage } from './ui/avatar'

export const BookingCard = () => {
  return (
    <Card>
      <CardContent className="flex justify-between p-0">
        <div className="flex flex-col gap-2 p-5">
          <Badge className="w-fit">Confirmado</Badge>
          <span className="font-semibold">Corte de Cabelo</span>

          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
            </Avatar>
            <strong className="text-sm">Vintage barbershop</strong>
          </div>
        </div>

        <div className="flex flex-col px-5 items-center justify-center border-l-2">
          <span className="text-sm">Agosto</span>
          <span className="text-2xl">05</span>
          <span className="text-sm">09:00</span>
        </div>
      </CardContent>
    </Card>
  )
}
