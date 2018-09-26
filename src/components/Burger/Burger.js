import React from 'react';
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const burger = (props) => {
    const transfromedIngredients = Object.keys(props.ingredients).
    map(igKey => {
        return [...Array(props.ingredients[igKey])].map((__dirname, index) => {
            return <BurgerIngredients key={igKey + index} type={igKey} />;
        });
    });
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {transfromedIngredients}
            <BurgerIngredients type='bread-bottom' />
        </div>
    );
}

export default burger;