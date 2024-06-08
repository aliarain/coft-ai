import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
type Props = {
    children: React.ReactNode
}

const Layout =  async ({children}: Props) => {
    const user = await currentUser()

    if(user) redirect('/')
    return (
        <div className="h-screen flex w-full justify-center">
            <div className='w-[6000px] ld:w-full flex flex-col items-start p-6'>
                <Image
                src='/logo.svg'
                alt='logo'
                sizes='100vw'
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                />
            {children}
            </div>
            <div className='hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3'>
                <h2 className='text-gravel md:text-4xl font-bold'> 
                    Hi, I'm your AI assistant. Coft! 
                </h2>
                <p className='text-iridium md:text-sm mb-10'>
                    Coft AI is capale of capturing lead information without a form...{' '} <br /> something never done before  
                </p>

            </div>
        </div>
    )
}

export default Layout