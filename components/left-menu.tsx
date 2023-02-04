import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PostType } from "public/types/common";

export default function LeftMenu ({allPosts}: {allPosts: PostType[]}) {
  allPosts.splice(3)
  const router = useRouter()
  console.log(router.pathname)
  return (
  <aside className={"width-extended bg-main-green font-lato text-brown justify-center text-xl px-2 top-12 absolute h-full z-20"}>
    <div>
      <div>Publicaciones Recientes</div>
      <div className="px-4">
        {allPosts.map((post) => {
          return (
            <div className="hover:bg-hover-green hover:text-lbrown rounded-md ">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </div>
          )
        })}
      </div>
    </div>
    <div>
      <div>Otras utilidades</div>
      <div className="px-4">
        <div className="hover:bg-hover-green hover:text-lbrown rounded-md">Utilidad de costos</div>
      </div>
    </div>
  </ aside>)
}