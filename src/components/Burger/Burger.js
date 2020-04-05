import React from 'react';
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).
    map(igKey => {
        return [...Array(props.ingredients[igKey])].map((__dirname, index) => {
            return <BurgerIngredients key={igKey + index} type={igKey} />;
        });
    }).reduce( (arr, ele) => {
        return arr.concat(ele)
    }, []);

    console.log('transformedIngredients --> ', transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start with adding ingredient!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {transformedIngredients}
            <BurgerIngredients type='bread-bottom' />
        </div>
    );
}

export default burger;
