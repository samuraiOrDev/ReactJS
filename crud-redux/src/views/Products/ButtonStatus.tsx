

interface Props {
  status: string
}
export const ButtonStatus = ({ status }: Props) => {
  return (
    <>
      {
        status.toLowerCase() === 'on sale' && (
          <span className="button-on-sale">
            {status}
          </span>
        )
      }
      {
        status.toLowerCase() === 'out sale' && (
          <span className="button-out-sale">
            {status}
          </span>
        )
      }

    </>
  )
}
