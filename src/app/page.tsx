import { BarbershopItem } from '@/components/barbershop-item'
import { BookingCard } from '@/components/booking-card'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/lib/prisma'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const HomePage = async () => {
  const data = await db.barbershop.findMany()

  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc',
    },
  })

  return (
    <div>
      <div className="p-5 space-y-6">
        <h2>Olá, Marcos de Souza</h2>
        <span>Segunda feira, 07 de Agosto</span>

        <div className="flex items-center gap-2">
          <Input placeholder="Pesquisar" />
          <Button size={'icon'}>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative w-full h-40">
          <Image
            fill
            alt=""
            src={'/banner-01.png'}
            className="object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs uppercase font-bold text-gray-400">
            Agendamentos
          </h3>
          <BookingCard />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs uppercase font-bold text-gray-400">
            RECOMENDADOS
          </h3>

          <Carousel className="w-full">
            <CarouselContent>
              {data.map((barbershop) => (
                <CarouselItem
                  className="basis-1/2 md:basis-1/2 lg:basis-1/3"
                  key={barbershop.id}
                >
                  <BarbershopItem key={barbershop.id} barbershop={barbershop} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs uppercase font-bold text-gray-400">
            populares
          </h3>

          <Carousel className="w-full">
            <CarouselContent>
              {popularBarbershops.map((barbershop) => (
                <CarouselItem
                  className="basis-1/2 md:basis-1/2 lg:basis-1/3"
                  key={barbershop.id}
                >
                  <BarbershopItem key={barbershop.id} barbershop={barbershop} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default HomePage
