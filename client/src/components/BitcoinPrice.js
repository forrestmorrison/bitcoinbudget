import { useState, useEffect } from "react"
import { FaBitcoin } from "react-icons/fa"
import axios from "axios"

const BitcoinPrice = () => {
  const [coins, setCoins] = useState([])

  const url = "/"

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data)
      console.group(res.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="btc-price">
        <h4>Current <FaBitcoin size="18px" style={{ margin: "0px 10px", color: "#F2A900"}}/> Price:</h4>
        <h4>$000</h4>
    </div>
  )
}

export default BitcoinPrice