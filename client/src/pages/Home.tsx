import Crousel from "../components/Crousel"
import Favorites from "../components/Favorites"
import { paddingSize } from "../declareSize"

export default function Home() {
  return (
    <div>
      <div className={paddingSize}>
        <div className="flex flex-col gap-16 sm:gap-6">
          <div className=" ">
            <Crousel/>
          </div>
          <div className="">
            <Favorites/>
          </div>
        </div>
      </div>
    </div>
  )
}
