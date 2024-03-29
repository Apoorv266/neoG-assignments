// Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, name, ingredients, and instructions. Write a React component that takes the array of recipes as input and generates an ordered list of recipes, where each list item displays the recipe's name, ingredients, and instructions. Data has been provided below for this questions.

import React from 'react'
import "./Q10-style.css"
const recipes = [
    {
        id: 1,
        name: "Spaghetti with Meatballs",
        ingredients: [
            "1 lb spaghetti",
            "1 lb ground beef",
            "1 cup breadcrumbs",
            "1 egg",
            "1/4 cup chopped parsley",
            "1/4 cup grated Parmesan cheese",
            "1/4 cup milk",
            "1/2 teaspoon salt",
            "1/2 teaspoon black pepper",
            "2 tablespoons olive oil",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "1 can (28 oz) crushed tomatoes",
            "1 teaspoon sugar",
            "1/4 teaspoon red pepper flakes",
            "1/4 cup chopped fresh basil",
        ],
        instructions: [
            "1. Cook the spaghetti according to package instructions until al dente.",
            "2. In a large bowl, combine the ground beef, breadcrumbs, egg, parsley, Parmesan, milk, salt, and pepper. Mix until well combined and form into meatballs.",
            "3. In a large skillet, heat the olive oil over medium heat. Add the onion and garlic and cook until softened, about 5 minutes.",
            "4. Add the crushed tomatoes, sugar, and red pepper flakes. Bring to a simmer and add the meatballs. Cover and simmer for 15-20 minutes, until the meatballs are cooked through.",
            "5. Serve the meatballs and sauce over the cooked spaghetti. Garnish with fresh basil.",
        ],
    },
    {
        id: 2,
        name: "Chocolate Chip Cookies",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon salt",
            "1 cup unsalted butter, at room temperature",
            "3/4 cup white sugar",
            "3/4 cup brown sugar",
            "2 large eggs",
            "2 teaspoons vanilla extract",
            "2 cups semisweet chocolate chips",
        ],
        instructions: [
            "1. Preheat the oven to 375 degrees F (190 degrees C). Line a baking sheet with parchment paper.",
            "2. In a medium bowl, whisk together the flour, baking soda, and salt.",
            "3. In a large bowl, beat together the butter, white sugar, and brown sugar until light and fluffy, about 2-3 minutes.",
            "4. Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.",
            "5. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
            "6. Stir in the chocolate chips.",
            "7. Drop the dough by rounded tablespoons onto the prepared baking sheet, spacing the cookies about 2 inches apart.",
            "8. Bake for 10-12 minutes, until the edges are golden brown and the centers are set.",
            "9. Cool the cookies on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely.",
        ],
    },
];
const Q10 = () => {
    return (
        <>
            {/* <ol>
                {recipes.map((item) => {
                    return (
                        <div key={item.id}>
                            <li><h3>Recipe {item.id} :</h3></li>

                            <ul>
                                <li><b>Recipe Name : </b>{item.name}</li>
                                <li>
                                    <b>Ingredients</b>
                                    <ol>
                                        {item.ingredients.map((item) => <li>{item}</li>)}
                                    </ol>
                                </li>

                                <li>
                                    <b>instructions</b>
                                    <ul>
                                        {item.instructions.map((item) => <li>{item}</li>)}
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    )

                })}
            </ol> */}



            <div className="App">
                <table>
                    <tr>
                        <th>Number</th>
                        <th>Recipe Name</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                    </tr>
                    {recipes.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td className='numId'>{item.id}</td>
                                <td className='recipeName'>{item.name}</td>

                                <td><ul>
                                    {item.ingredients.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })}
                                </ul></td>

                                <td>
                                    <ul>
                                        {item.instructions.map((item, index) => (<li key={index}>{item}</li>))}
                                    </ul>
                                </td>
                            </tr>
                        )
                    })}

                </table>
            </div>
        </>
    )
}

export default Q10