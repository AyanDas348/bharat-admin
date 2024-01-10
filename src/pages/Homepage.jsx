import OfferCard from "../components/Offercard"
import Usercard from "../components/Usercard"

const Homepage = () => {
  return (
    <div className="w-full mt-3 grid grid-rows-6 grid-cols-4">
    <Usercard />
    <OfferCard />
    </div>
  )
}

export default Homepage