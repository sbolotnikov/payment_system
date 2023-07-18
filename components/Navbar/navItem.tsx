import Link from 'next/link'
import ShowIcon from '../svg/showIcon'

type IProps = {
  icon: string
  title: string
  url: string
}
function NavItem({ icon, title, url }: IProps) {
  return (
    <Link href={url} replace
    >
      <div className="group flex  cursor-pointer  flex-row items-center md:hover:scale-125   md:w-12 md:flex-col md:items-center ">
  <div className="nav_img order-1 h-8 md:w-8 my-1.5 mr-2 fill-none group-hover:animate-bounce  md:order-none md:mb-1 stroke-lightMainColor dark:stroke-darkMainColor ">
  <ShowIcon  icon={icon} stroke={'2'} />
    </div>
        
        <p className="hidden tracking-widest mx-3 transition duration-300 ease-in-out opacity-100 group-hover:inline-flex md:block md:opacity-0 md:group-hover:opacity-100 ">
          {title}
        </p>
      </div>
    </Link>
  )
} 


export default NavItem
