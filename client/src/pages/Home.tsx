import Crousel from "../components/Crousel"
import { paddingSize } from "../declareSize"

export default function Home() {
  return (
    <div>
      <div className={paddingSize}>
        <div className=" ">
          <div className=" ">
            <Crousel/>
          </div>
        </div>
      </div>
    </div>
  )
}
