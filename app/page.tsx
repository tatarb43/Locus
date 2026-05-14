import {Container} from '../components/container'
import {Button} from '../components/ui/button'
import {CardSmall}  from '../components/ui/cardComponent'
import { Input } from "@/components/ui/input"

export default function Page() {
  return (
        <div className="font-mono text-xs text-muted-foreground">
          <Container>

            {/* Hero */}
            <div className="flex flex-col items-center gap-4 text-center pt-5">
              <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ">
                Locus — твой центр управления делами
              </h1>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Автоматизация задач, и умный трекинг дедлайнов
              </h4>
              <Button className='w-60 h-15 text-xl rounded-2xl px-4 py-2 mt-4 hover:bg-primary/90 transition-colors duration-300'>
                Начать
              </Button>
            </div>


            <div className='flex gap-100'>
              {/* Статистика */}
              <div className="flex flex-col gap-y-5 pt-4">
                <div> 
                  <CardSmall/>
                </div>
                <div> 
                  <CardSmall />
                </div>
                <div > 
                  <CardSmall />
                </div>
              </div>


              {/* Преобразование видео в конспект */}
              <div className=" gap-6 pt-4">
                <div className="flex">  
                  <Input className='w-80 h-15 text-xl rounded-2xl px-4 py-2 mt-4 hover:bg-primary/90 transition-colors duration-300' placeholder="Вставьте ссылку на видео" />
                  <Button className='w-20 h-15 text-sm rounded-2xl px-4 py-2 mt-4 hover:bg-primary/90 transition-colors duration-300 ml-2'>
                    Конспект
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
  )
}
