export type PostType = {
  title: string
  coverImage: { 
    responsiveImage: {
      srcSet: string
      webpSrcSet: string
      sizes: string
      src: string
      width: number
      height: number
      aspectRatio: number
      bgColor: string
      base64: string
      alt?: string | null
      title?: string | null
    }
  }
  content: string
  date: Date
  author: string
  slug: string
  ogImage: { url:string }
}