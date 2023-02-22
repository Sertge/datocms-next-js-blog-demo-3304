import LeftMenu from "@/components/left-menu";
import { useState } from "react";
import { FaHamburger } from 'react-icons/fa'
import Link from "next/link";

export const Header = ({ allPosts }) => {
  const [ isOpenLeftMenu, setIsOpenLeftMenu ] = useState(false)
  const toggleLeftMenu = () => setIsOpenLeftMenu(!isOpenLeftMenu)
  return (
    <>
      <div className="top-0 text-4xl px-2 sticky mx-0 inline-flex align-middle bg-main-green w-full h-12 z-20">
        <div onClick={toggleLeftMenu}>
        <FaHamburger className="pt-2 text-azure cursor-pointer"/>
        </div> <Link href='/' className="pl-2 text-azure font-bold">Cocina con Ale</Link>
      </div>
      {isOpenLeftMenu && <LeftMenu allPosts={allPosts} />}
    </>
  )
}