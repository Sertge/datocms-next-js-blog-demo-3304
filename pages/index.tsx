import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Container from "@/components/container"
import Layout from "@/components/layout"
import { getAllPostsForHome } from '../lib/api'
import Head from "next/head"
import { Header } from '@/components/header'

export default function TestPage({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <>
      <Layout>
        <Head>
          <title>Cocina con Ale</title>
        </Head>
        <Header allPosts={allPosts} />
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