
import Barchart from './barchart'
export default function PageLayout() {
  return (
      <div className='pageLayot'>
          <header>
              <span className='text-header'>
                  Visualization Alpha
              </span>
          </header>
          <div>
              <Barchart/>
          </div>
    </div>
  )
}
