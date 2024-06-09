import Crousel from "../components/Crousel"
import Favorites from "../components/Favorites"
import Trails from "../components/Trails"
import { paddingSize } from "../declareSize"

export default function Home() {
  return (
    <div>
      <div className="">
        <div className="flex flex-col gap-16 sm:gap-6">
          <div className={paddingSize}>
            <Crousel/>
          </div>
          <div className={paddingSize}>
            <Favorites/>
          </div>
          <div className="">
            <Trails/>
          </div>
        </div>
      </div>
    </div>
  )
}
