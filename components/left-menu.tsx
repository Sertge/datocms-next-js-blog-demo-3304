import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PostType } from "public/types/common";

export default function LeftMenu ({allPosts}: {allPosts: PostType[]}) {
  allPosts.splice(3)
  const router = useRouter()
  console.log(router.pathname)
  // Color blend style on tailwind config for background on hover (consider using 'apply')
  return (
  <aside className={"bg-main-green font-lato text-azure justify-center text-xl px-2 top-12 fixed h-screen z-20 duration-500 animate-slide-in"}>
    <div>
      <div className="py-4 font-bold"><Link href="/">Página principal</Link></div>
      <div className="font-bold">Publicaciones Recientes</div>
      <div className="px-4" >
        {allPosts.map((post) => {
          return (
            <div key={post.slug} className="hover:bg-azure hover:text-indigo hover:border-b-indigo hover:border-b-2 rounded-md space-y-0">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </div>
          )
        })}
      </div>
    </div>
    <div className="py-4 space-y-2">
      <div className="font-bold">Otras utilidades</div>
      <div className="hover:bg-azure hover:text-indigo hover:border-b-indigo hover:border-b-2 rounded-md px-4">
        <Link href="/">Utilidad de costos</Link>
      </div>
    </div>
  </ aside>)
}