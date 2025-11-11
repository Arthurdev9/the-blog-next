import PostCoverImage from '../PostCoverImage'
import PostHeading from '../PostHeading'

const PostFeatured = () => {
  const slug = 'qualquer'
  const postLink = `/post/${slug}`

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_7.png',
          alt: 'Alt da imagem',
          priority: true
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 text-sm/tight block"
          dateTime="2025-11-04"
        >
          04/11/2025 15:58
        </time>
        <PostHeading url={postLink} as="h1">
          Lorem ipsum dolor sit amet.
        </PostHeading>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ipsam
          recusandae in, aliquam vero nesciunt excepturi quia repellat ipsum est
          magni, repellendus doloribus mollitia voluptatibus iusto delectus
          veniam eos accusamus!
        </p>
      </div>
    </section>
  )
}

export default PostFeatured
