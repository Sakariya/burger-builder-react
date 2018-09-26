import React from 'react';
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const burger = (props) => {
    let transfromedIngredients = Object.keys(props.ingredients).
    map(igKey => {
        return [...Array(props.ingredients[igKey])].map((__dirname, index) => {
            return <BurgerIngredients key={igKey + index} type={igKey} />;
        });
    }).reduce( (arr, ele) => {
        return arr.concat(ele)
    }, []);

    console.log('transfromedIngredients --> ', transfromedIngredients);
    
    if(transfromedIngredients.length === 0){
        transfromedIngredients = <p>Please start with adding ingredient!</p>
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {transfromedIngredients}
            <BurgerIngredients type='bread-bottom' />
        </div>
    );
}

export default burger;