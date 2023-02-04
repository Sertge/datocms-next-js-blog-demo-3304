import LeftMenu from "../components/left-menu";
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Container from "@/components/container"
import Layout from "@/components/layout"
import { HamburgerMenu } from "@/components/hamburger";
import { getAllPostsForHome } from '../lib/api'
import Head from "next/head";
import { useState } from "react";

export default function TestPage({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const [ isOpenLeftMenu, setIsOpenLeftMenu ] = useState(false)
  const toggleLeftMenu = () => setIsOpenLeftMenu(!isOpenLeftMenu)
  return (
    <>
      <Layout>
        <Head>
          <title>Test page for new components</title>
        </Head>
        <div className="top-0 px-2 absolute mx-0 inline-flex align-middle bg-main-green w-full h-12">
          <HamburgerMenu onClick={toggleLeftMenu}/> <p className="text-4xl pl-2 text-brown font-bold">Cocina con Ale</p>
        </div>
        {isOpenLeftMenu && <LeftMenu allPosts={allPosts} />}
        <Container>
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
  }
}