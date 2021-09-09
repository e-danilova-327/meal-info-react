import React from 'react';

const Header = ({ onClick }) => {
    return (
        <div>
            <div className="row text-center">
                <h3 className="fs-2 mt-5">Feeling hungry?</h3>
                <h5 className="fs-3 py-1 mt-1 mb-3 fw-normal">
                    Get a random meal by clicking below
                </h5>
                <div>
                    <button
                        onClick={onClick}
                        className=" btn-info rounded w-25 fw-bold d-block
                        mx-auto text-uppercase text-white p-2 fs-5 mb-5 "
                        id="mealBtn"
                    >
                        {' '}
                        Get Meal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
