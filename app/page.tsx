import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <div className="w-full h-full p-0 m-0 flex flex-col items-center justify-center ">
            
      <h2>Welcome to Home Page</h2>
     
    </div>
  )
}
