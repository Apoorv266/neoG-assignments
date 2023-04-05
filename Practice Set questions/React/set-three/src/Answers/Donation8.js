import React from 'react'

const Donation8 = ({ DonationData }) => {
    return (
        <div>Total Donation Collected: Rs.{DonationData.reduce((acc, arr) => acc + arr.Donation, 0)}</div>
    )
}

export default Donation8