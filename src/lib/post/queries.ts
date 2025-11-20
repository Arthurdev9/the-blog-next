import { postRepository } from '@/repositories/post'
import { notFound } from 'next/navigation'
import { cache } from 'react'

export const findAllPublicPosts = cache(async () => {
  const posts = await postRepository.findAllPublic()
  return posts
})

export const findPostBySlugCached = cache(async (slug: string) => {
  const posts = await postRepository.findBySlug(slug).catch(() => undefined)

  if (!posts) notFound()

  return posts
})

export const findPostByIdCached = cache(async (id: string) => {
  const posts = await postRepository.findById(id)
  return posts
})
