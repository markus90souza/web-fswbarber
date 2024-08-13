import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div>
      <Header />

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
      </div>
    </div>
  )
}

export default HomePage
