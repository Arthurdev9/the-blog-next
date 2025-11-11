import { Suspense } from 'react'

import Header from '@/components/Header'
import Container from '@/components/Container'
import PostsList from '@/components/PostsList'
import SpinLoader from '@/components/SpinLoader'
import PostFeatured from '@/components/PostFeatured'

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <h2 className="text-6xl font-bold text-center py-8">Aqui é o Footer</h2>
      </footer>
    </Container>
  )
}
