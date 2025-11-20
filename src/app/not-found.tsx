import ErrorMessage from '@/components/ErrorMessage'

const NotFoundPage = () => {
  return (
    <ErrorMessage
      pageTitle="Página não encontrada"
      contentTitle="404"
      content="Error 404 - A página que você está tentando acessar não existe neste
            site."
    />
  )
}

export default NotFoundPage
