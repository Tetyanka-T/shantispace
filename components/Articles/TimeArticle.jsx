import { useFormatter } from 'next-intl'

const TimeArticle = ({ dateCreate }) => {
  const format = useFormatter()
  const currentTime = new Date(dateCreate)

  format.currentTime(currentTime, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return (
    <>
      <span suppressHydrationWarning className='text-right text-sm'>
        Опубліковано {currentTime(dateCreate)}
      </span>
    </>
  )
}

export default TimeArticle
