import { FaBitcoin } from "react-icons/fa"

const BitcoinPrice = () => {
  return (
    <div className="btc-price">
        <h4>Current <FaBitcoin size="18px" style={{ margin: "0px 10px", color: "#F2A900"}}/> Price:</h4>
        <h4>$000</h4>
    </div>
  )
}

export default BitcoinPrice