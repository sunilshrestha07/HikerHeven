import Announcement from "../components/Announcement"
import Crousel from "../components/Crousel"
import Favorites from "../components/Favorites"
import FindMore from "../components/FindMore"
import Trails from "../components/Trails"
import { paddingSize } from "../declareSize"

export default function Home() {
  return (
    <div>
      <div className="">
        <div className="flex flex-col gap-10">
          <div className={paddingSize}>
            <Crousel/>
          </div>
          <div className={paddingSize}>
            <Favorites/>
          </div>
          <div className="">
            <Trails/>
          </div>
          <div className={paddingSize}>
            <FindMore/>
          </div>
          <div className={paddingSize}>
            <Announcement/>
          </div>
        </div>
      </div>
    </div>
  )
}
