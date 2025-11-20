import { formatDateTime, formatDistanceToNow } from '@/utils/format-datetime'

type PostDateProps = {
  dateTime: string
}

const PostDate = ({ dateTime }: PostDateProps) => {
  return (
    <time
      className="text-slate-600 text-sm/tight"
      dateTime={dateTime}
      title={formatDistanceToNow(dateTime)}
    >
      {formatDateTime(dateTime)}
    </time>
  )
}

export default PostDate
