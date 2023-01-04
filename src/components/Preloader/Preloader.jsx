import preloader from '../../preloader.svg'

export const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} alt="Загрузка..." />
    </div>
  )
}