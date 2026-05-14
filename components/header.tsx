'use client'

import { useIntersection } from 'react-use';
import { useTheme } from 'next-themes';
import {cn} from '@/lib/utils'
import {Container} from './container'
import { User, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useRef } from 'react';
import { useView } from '@/store/useView';

interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({className}) => {

    const { resolvedTheme, setTheme } = useTheme()

    const setActive = useView((state) => state.setActive); //Мой хук
    const intersectionRef = useRef<HTMLDivElement | null>(null);
    const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
        threshold: 1, // Процент видимости элемента для срабатывания
    });

    useEffect(() => {
        if(intersection && !intersection.isIntersecting){
            console.log('произошло');
            setActive(true);    
        } else {
            setActive(false);
            console.log('не произошло');
        }
    }, [intersection?.isIntersecting, setActive]);


    return (
        <header className={cn('border border-b ', className)}>  {/*cn-склеивает классы  |   '', className - сначало базовый класс а потом то что мы можем прикрутить*/}
            <Container className='flex items-center justify-between py-8'> {/*py- paddng по Y*/}
                {/*Левая часть*/}

                <div ref={intersectionRef} className='flex items-center gap-4'>
                     <Button onClick={()=> setTheme(resolvedTheme === "dark" ? "light" : "dark")} variant='outline' className='flex items-center gap-0.5'>
                        {resolvedTheme === "dark" ? "Светлая тема  ☀️ " : "Темная тема  🌙 "}
                     </Button>
                </div>

                <div className='flex items-center gap-4'>
                    <img src="/favicon.ico" alt="Locus" className='w-10 h-10 rounded-lg' />
                    <div> 
                        <h1 className='text-2xl uppercase font-black'>Locus</h1>
                        <p className='text-sm text-gray-400 leading-3'>Клиниг вашего мозга</p> 
                    </div>
                </div>  


                {/*Правая часть*/}
                <div className='flex items-center gap-4'>
                    <Button variant='outline' className='flex items-center gap-0.5'>
                        <User size={18} color="#00786f" strokeWidth={1.5} />
                        Войти
                    </Button>

                    <div>
                        <Button className='group relative'>
                            <b>5200$</b>

                            <span className="h-full w-[1px] bg-white/30 mx-2"></span>

                            <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                                {/*картинка*/}
                                <b>3</b>
                            </div>
                            <ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"/>
                        </Button>
                    </div>
                </div> 

            </Container>
        </header>
    )
}