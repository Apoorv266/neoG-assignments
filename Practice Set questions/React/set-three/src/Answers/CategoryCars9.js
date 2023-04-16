import React from 'react'

const CategoryCars9 = ({ cars }) => {
    
    function carCategoryFunc(cars) {
        return cars.reduce((acc, arr) => {
            const { category } = arr;
            return { ...acc, [category]: acc[category] ? acc[category] + 1 : 1};
            // return { ...acc, [category]: (acc[category] || 0) + 1 }
        }, {})
    }
    console.log(carCategoryFunc(cars))
    return (
        <div>
            {Object.keys(carCategoryFunc(cars)).map((item => {
                return <p key={item}>{item}:{carCategoryFunc(cars)[item]}</p>
            }))}

        </div>
    )
}

export default CategoryCars9

