import './catalog.scss';
import './products.scss';
import './product-card.scss';
import './filters.scss';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { useState } from 'react';
import BestSellingList from '../best-selling-list/best-selling-list';
import { PRODUCTS } from '../../mocks/products';

function Catalog(): JSX.Element {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const handlePriceInput = (e:ChangeResult) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);
  };

  const [minValue, setMinValue] = useState(100);
  const [maxValue, setMaxValue] = useState(500);
  const handleValueInput = (e:ChangeResult) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  return (
    <section className="catalog page-section">
      <div className="catalog__filters filters">
        <form className="filters__form" action="https://echo.htmlacademy.ru" method="post">
          <fieldset className="filters__group">
            <legend className="filters__title">Search</legend>
            <input className="filters__search" type="search" autoComplete="off" placeholder="Type drink name" onChange={() => 123}/>
          </fieldset>
          <fieldset className="filters__group">
            <legend className="filters__title filters__title--price">Price</legend>
            <MultiRangeSlider
              ruler="false"
              label={false}
              className="range"
              min={0}
              max={100}
              minValue={0}
              maxValue={100}
              barLeftColor="##bdbdbd"
              barRightColor="##bdbdbd"
              barInnerColor="#64646a"
              onInput={(e) => handlePriceInput(e)}
            />
            <div className="inputs">
              <input className='inputs__price inputs__price--min' type="number" value={minPrice}/>
              <input className='inputs__price inputs__price--max' type="number" value={maxPrice}/>
            </div>
          </fieldset>
          <fieldset className="filters__group">
            <legend className="filters__title">Size, ml</legend>
            <MultiRangeSlider
              min={100}
              max={500}
              minValue={100}
              maxValue={500}
              ruler="false"
              label={false}
              className="range"
              barLeftColor="##bdbdbd"
              barRightColor="##bdbdbd"
              barInnerColor="#64646a"
              onInput={(e) => handleValueInput(e)}
            />
            <div className="inputs">
              <input className='inputs__price' type="number" value={minValue}/>
              <input className='inputs__price' type="number" value={maxValue}/>
            </div>
          </fieldset>
          <fieldset className="filters__group">
            <legend className="filters__title">Other</legend>
            <ul className="filters__list">
              <li className="filters__item">
                <label className="control control--checkbox">
                  <input className="control__input visually-hidden" type="checkbox" name="popular" />
                  <span className="control__mark"></span>
                  <span className="control__label">Popular</span>
                </label>
              </li>
              <li className="filters__item">
                <label className="control control--checkbox">
                  <input className="control__input visually-hidden" type="checkbox" name="new" />
                  <span className="control__mark"></span>
                  <span className="control__label">New</span>
                </label>
              </li>
              <li className="filters__item">
                <label className="control control--checkbox">
                  <input className="control__input visually-hidden" type="checkbox" name="caffein" />
                  <span className="control__mark"></span>
                  <span className="control__label">Decaff</span>
                </label>
              </li>
            </ul>
          </fieldset>
          <button className="filters__button button-primarly" type="reset">Reset filters</button>
          <button className="filters__button button-primarly" type="button">Reset settings</button>
        </form>
      </div>
      <div className="catalog__items products">
        <div className="select">
          <label className="select__heading" htmlFor="sort">Sorting:</label>
          <select className="select__option" name="sort">
            <option value="default">Default</option>
            <option value="price-down">Price down</option>
            <option value="price-up">Price up</option>
            <option value="popular">Size down</option>
            <option value="popular">Size up</option>
            <option value="popular">Top rating</option>
          </select>
        </div>
        <BestSellingList products={PRODUCTS} />
      </div>
    </section>
  );
}

export default Catalog;
