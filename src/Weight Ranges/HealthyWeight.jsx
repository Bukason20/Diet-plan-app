function HealthyWeight() {
    return (
        <div className = "weight-ranges">
        <h2>Recipes for Maintaining a Healthy Weight</h2>

        <div className="recipes">
            <div className="recipe">
                <p className= "recipe-name">1) Grilled Salmon with Asparagus</p>
                <div className="recipe-procedures">
                    <div className="ingredients">
                        <p>Ingredients:</p>
                        <ul>
                            <li>2 salmon fillets (6 oz each)</li>
                            <li>Salt and pepper, to taste</li>
                            <li>1 tablespoon olive oil</li>
                            <li>1 pound asparagus, trimmed</li>
                            <li>1 tablespoon lemon juice</li>
                        </ul>
                    </div>

                    <div className="instructions">
                        <p>Instructions:</p>
                        <ol>
                            <li>Preheat grill to medium-high heat.</li>
                            <li>Season salmon fillets with salt and pepper and brush with olive oil.</li>
                            <li>Grill salmon for 4-5 minutes per side, until cooked through.</li>
                            <li>Meanwhile, toss asparagus with 1 tablespoon olive oil and season with salt and pepper.</li>
                            <li>Grill asparagus for 4-5 minutes, until tender-crisp.</li>
                            <li>Drizzle asparagus with lemon juice and serve with grilled salmon.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="recipe">
                <p className= "recipe-name">2) Quinoa Salad with Roasted Vegetables</p>
                <div className="recipe-procedures">
                    <div className="ingredients">
                        <p>Ingredients:</p>
                        <ul>
                            <li>1 cup quinoa</li>
                            <li>2 cups mixed vegetables (such as sweet potatoes, bell peppers, and onions), cut into bite-sized pieces</li>
                            <li>1 tablespoon olive oil</li>
                            <li>Salt and pepper, to taste</li>
                            <li>1/4 cup chopped fresh parsley</li>
                            <li>1/4 cup chopped fresh mint</li>
                            <li>1/4 cup crumbled feta cheese</li>
                            <li>2 tablespoons lemon juice</li>
                            <li>1 tablespoon honey</li>
                            <li>1 tablespoon Dijon mustard</li>
                        </ul>
                    </div>

                    <div className="instructions">
                        <p>Instructions:</p>
                        <ol>
                            <li>Preheat oven to 400°F.</li>
                            <li>Cook quinoa according to package instructions.</li>
                            <li>Toss mixed vegetables with olive oil, salt, and pepper. Spread in a single layer on a baking sheet and roast for 20-25 minutes, stirring occasionally, until tender and slightly caramelized.</li>
                            <li>In a large bowl, combine cooked quinoa, roasted vegetables, parsley, mint, and feta cheese.</li>
                            <li>In a small bowl, whisk together lemon juice, honey, and Dijon mustard. Drizzle over quinoa salad and toss to combine.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HealthyWeight
