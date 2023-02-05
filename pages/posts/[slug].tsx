import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import MoreStories from '@/components/more-stories'
import PostHeader from '@/components/post-header'
import SectionSeparator from '@/components/section-separator'
import Layout from '@/components/layout'
import { HamburgerMenu } from "@/components/hamburger"
import LeftMenu from "@/components/left-menu"
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import markdownToHtml from '@/lib/markdownToHtml'
import { PostType } from 'public/types/common'
import { useState } from "react";

export default function Post({ post, morePosts, preview }: {post: PostType, morePosts: PostType[], preview: boolean}) {
  const router = useRouter()
  const allPosts = [post, morePosts] as PostType[]
  const [ isOpenLeftMenu, setIsOpenLeftMenu ] = useState(false)
  const toggleLeftMenu = () => setIsOpenLeftMenu(!isOpenLeftMenu)
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <div className="top-0 px-2 absolute mx-0 inline-flex align-middle bg-main-green w-full h-12 z-20">
        <HamburgerMenu onClick={toggleLeftMenu}/> <p className="text-4xl pl-2 text-brown font-bold">Cocina con Ale</p>
      </div>
      {isOpenLeftMenu && <LeftMenu allPosts={allPosts} />}
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} | Cocina con Ale`}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const content = await markdownToHtml(data?.post?.content || '')

  return {
    props: {
      preview,
      post: {
        ...data?.post,
        content,
      },
      morePosts: data?.morePosts ?? [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug() as PostType[]
  return {
    paths: allPosts?.map((post: PostType) => `/posts/${post.slug}`) || [],
    fallback: true,
  }
}