import React from 'react';

const Info = ({ info }) => {
    return (
        <div className={'row meal'}>
            <div className={'row my-2 py-2'}>
                {info.map((meal) => (
                    <>
                        <div className="col-5">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className={'d-block ms-0 mb-4 image'}
                            />
                            {meal.strCategory ? (
                                <p>
                                    <strong>Category: </strong>
                                    {meal.strCategory}
                                </p>
                            ) : (
                                ''
                            )}
                            {meal.strArea ? (
                                <p>
                                    <strong>Area: </strong>
                                    {meal.strArea}
                                </p>
                            ) : (
                                ''
                            )}
                            <h5>Ingredients:</h5>
                            <ul>
                                <li>
                                    {meal.strIngredient1} - {meal.strMeasure1}
                                </li>
                                <li>
                                    {meal.strIngredient2} - {meal.strMeasure2}
                                </li>
                                <li>
                                    {meal.strIngredient3} - {meal.strMeasure3}
                                </li>
                                <li>
                                    {meal.strIngredient4} - {meal.strMeasure4}
                                </li>
                                <li>
                                    {meal.strIngredient5} - {meal.strMeasure5}
                                </li>
                            </ul>
                        </div>
                        <div className="col-7">
                            <h4>{meal.strMeal}</h4>
                            <p>{meal.strInstructions}</p>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Info;
