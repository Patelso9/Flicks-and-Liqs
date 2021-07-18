import React from 'react';
import { Link } from 'react-router-dom';

const CocktailList = ({
  drinks,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!drinks.length) {
    return <h3>Add a drink below</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {drinks &&
        drinks.map((drink) => (
          <div key={drink._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${drink.drinkAuthor}`}
                >
                  {drink.drinkAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    added this drink on {drink.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  {/* <span style={{ fontSize: '1rem' }}>
                    You added this drink: {drink.createdAt}
                  </span> */}
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <h4>{drink.drinkText}</h4>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CocktailList;
