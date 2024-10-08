import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import React from 'react'
import Link from 'next/link'
import { Medal } from 'lucide-react'
import { Button } from '@/components/ui/button'

const headingFont = localFont({
    src: '../../public/fonts/font.woff'
});
const textFont = Poppins({
    subsets:['latin'],
    weight: [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
    ]
})
const MarketingPage = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className={cn('flex justify-center items-center flex-col',
            headingFont.className       
            )}>
                <div className='flex mb-4 p-4 text-amber-700 bg-amber-100 uppercase rounded-full shadow-sm border items-center '>
                    <Medal className='h-6 w-6 mr-2' />
                    No.1 task management
                </div>
                <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6 '>
                    Peakify helps team move
                </h1>
                <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white px-4 p-2 rounded-md w-fit pb-4'>
                    work forward.
                </div>
            </div>
            <div className={cn('text-sm md:text-xl Itext-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto ',
                textFont.className
            )}>
                Collaborate, manage projects, and reach new productivity
                peaks. From high rises to the home office, the way your team
                works is unique - accomplish it all with Peakify.
            </div>
            <Button className=' mt-6 ' size='lg' asChild>
                <Link href={'/sign-up'}>Get your Peakify here for free</Link>

            </Button>
        </div>
    )
}

export default MarketingPage
