interface PaginationProps {
  page: number
  setPage: any
  lastPage: number
}

export default function Pagination({
  page,
  setPage,
  lastPage,
}: PaginationProps) {
  const handleScrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  const handleNextPage = () => {
    setPage((prevState: number) => prevState + 1)
    handleScrollTop()
  }

  const handlePrevPage = () => {
    setPage((prevState: number) => prevState - 1)
    handleScrollTop()
  }

  return (
    <div className="flex justify-center items-center px-2 py-4 gap-4 text-color-primary text-2xl">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="hover:text-color-accent transition-all"
        >
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>

      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="hover:text-color-accent transition-all"
        >
          Next
        </button>
      )}
    </div>
  )
}
