import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  useState, useEffect, useContext, Fragment,
} from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { BackButton } from '../../components/BackButton/BackButton';

import { Product, ProductType } from '../../types/Product';
import { ProductWithDetails } from '../../types/ProductWithDetails';

import {
  getAllProducts,
  getShuffleProducts,
} from '../../helpers/FetchProducts';
import { getPhones } from '../../api/phones';
import { getTablets } from '../../api/tablets';
import { getAccessories } from '../../api/accessories';

import { Loader } from '../../components/Loader/Loader';
import './ProductDetailsPage.scss';

import { CartContext } from '../../contexts/cartContext';
import { FavouritesContext } from '../../contexts/favoritesContext';

import FavouritesFilled from '../../Images/Icons/FavouritesFilled.svg';
import FavouritesHeartLike from '../../Images/Icons/FavouritesHeartLike.svg';

import { ProductsSlider } from '../../components/ProductsSlider/ProductsSlider';

export interface ColorsType {
  [key: string]: string;
}

export const colorDictionary: ColorsType = {
  black: '#1F2020',
  coral: '#EE7762',
  gold: '#F9E5C9',
  green: '#AEE1CD',
  midnightgreen: '#004953',
  purple: '#e5ddea',
  red: '#BA0C2E',
  rosegold: '#E6C7C2',
  silver: '#e2e4e1',
  spacegray: '#535150',
  white: '#F8F7F2',
  yellow: '#F3D060',
};

export const ProductDetailsPage = () => {
  const { isInCart, handleCart } = useContext(CartContext);
  const { isInFavorites, handleFavorites } = useContext(FavouritesContext);
  const newPath = '/new/';

  const location = useLocation();
  const category = location.pathname.split('/')[1];

  const { pathname } = location;
  const productAdress = pathname.split('/').filter((item) => item !== '');
  const productId = productAdress[productAdress.length - 1];

  const [products, setProducts] = useState<Product[] | null>(null);
  const [productInfo, setProductInfo] = useState<Product | null>(null);
  const [details, setDetails] = useState<ProductWithDetails | null>(null);

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isShufflLoading, setIsShufflLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (image: string) => {
    setCurrentImage(image);
  };

  const handleColorChange = (color: string) => {
    const Url
      = `/${productInfo?.category}/${details?.namespaceId}-${details?.capacity}-${color}`.toLowerCase();

    navigate(Url);
  };

  const handleCapacityChange = (capacity: string) => {
    const Url
      = `/${productInfo?.category}/${details?.namespaceId}-${capacity}-${details?.color}`.toLowerCase();

    navigate(Url);
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      let productsDetails: ProductWithDetails[] = [];

      switch (category) {
        case ProductType.Phone:
          productsDetails = await getPhones();
          break;
        case ProductType.Tablet:
          productsDetails = await getTablets();
          break;
        case ProductType.Accessories:
          productsDetails = await getAccessories();
          break;
        default:
          setError('Invalid category');
          break;
      }

      if (productsDetails.length === 0) {
        setError('Product details were not found...');

        return;
      }

      const allProducts = await getAllProducts();
      const currentProduct = allProducts.find(
        (prod) => prod.itemId === productId,
      );

      if (!currentProduct) {
        setError('Could not find exact product...');

        return;
      }

      setProductInfo(currentProduct);

      const currentDetails = productsDetails.find(
        (prodDetails) => prodDetails.id === currentProduct.itemId,
      );

      if (!currentDetails) {
        setError('Could not find details for the product...');

        return;
      }

      setDetails(currentDetails);
      setCurrentImage(currentProduct.image);
    } catch (err) {
      setError('Error fetching product details');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchShuffledProducts = async () => {
    setIsShufflLoading(true);
    try {
      const shuffledProducts = await getShuffleProducts();

      setProducts(shuffledProducts);
    } catch (err) {
      setError('Could not fetch shuffled products');
    } finally {
      setIsShufflLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [productId, category]);

  useEffect(() => {
    fetchShuffledProducts();
  }, []);

  if (isLoading || isShufflLoading) {
    return <Loader />;
  }

  return (
    <section className="product-details">
      <div className="product-details__navigation" data-cy="breadCrumbs">
        <BreadCrumbs productName={details?.name || '???'} />
      </div>

      <section className="product-details__back-button">
        <BackButton />
      </section>

      {!details || !productInfo || error ? (
        <div className="product-details__error">
          <h1 className="product-details__error-title">{error}</h1>
          <p className="product-details__error-description">
            Something went wrong...
          </p>
        </div>
      ) : (
        <>
          <section
            className="product-details__section
            product-details__section--small"
          >
            <h1 className="product-details__title">{details.name}</h1>
          </section>

          <section className="product-details__section">
            <div className="product-details__grid">
              <div className="product-details__small-photos">
                {details.images.map((image) => (
                  <div
                    key={image}
                    className={classNames(
                      'product-details__small-photo-container',
                      {
                        'product-details__small-photo-container--selected':
                          image === currentImage,
                      },
                    )}
                    onClick={() => handleImageChange(image)}
                    aria-hidden
                  >
                    <img
                      className="product-details__photo"
                      src={newPath + image}
                      alt={newPath + image}
                    />
                  </div>
                ))}
              </div>

              <div className="product-details__big-photo-container">
                <img
                  className="product-details__photo"
                  src={newPath + currentImage}
                  alt={newPath + currentImage}
                />
              </div>

              <div className="product-details__actions">
                <div className="product-details__colors">
                  <p className="product-details__actions-title">
                    Available colors
                  </p>

                  <div className="product-details__colors-container">
                    {details.colorsAvailable.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={classNames(
                          'product-details__colors-button',
                          {
                            'product-details__colors-button--selected':
                              color === details.color,
                          },
                        )}
                        style={{
                          backgroundColor: colorDictionary[color],
                        }}
                        aria-label="change-color"
                        onClick={() => handleColorChange(color)}
                      />
                    ))}
                  </div>
                </div>

                <div className="product-details__underline" />

                <div className="product-details__capacity">
                  <p className="product-details__actions-title">
                    Select capacity
                  </p>

                  <div className="product-details__capacity-button-container">
                    {details.capacityAvailable.map((capacity) => (
                      <button
                        key={capacity}
                        type="button"
                        className={classNames(
                          'product-details__capacity-button',
                          {
                            'product-details__capacity-button--selected':
                              capacity === details.capacity,
                          },
                        )}
                        onClick={() => handleCapacityChange(capacity)}
                      >
                        {capacity}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="product-details__underline" />

                <div className="product-details__price">
                  <span className="product-details__price-new">
                    {`$${details.priceDiscount}`}
                  </span>

                  <span className="product-details__price-old">
                    {`$${details.priceRegular}`}
                  </span>
                </div>

                <div className="product-details__buttons">
                  <button
                    type="button"
                    className={classNames('product-details__button-add-cart', {
                      'product-details__button-add-cart--added':
                        isInCart(productInfo),
                    })}
                    onClick={() => handleCart(productInfo)}
                  >
                    {isInCart(productInfo) ? 'Added to cart' : 'Add to cart'}
                  </button>

                  <button
                    type="button"
                    className={classNames('product-details__button-favorites', {
                      'product-details__button-favorites--added':
                        isInFavorites(productInfo),
                    })}
                    data-cy="addToFavorite"
                    onClick={() => handleFavorites(productInfo)}
                  >
                    {isInFavorites(productInfo) ? (
                      <img src={FavouritesFilled} alt="FavouritesFilled" />
                    ) : (
                      <img
                        src={FavouritesHeartLike}
                        alt="FavouritesHeartLike"
                      />
                    )}
                  </button>
                </div>

                <ul className="product-details__actions-description">
                  <li className="product-details__actions-description-box">
                    <span
                      className="product-details__actions-description-title"
                    >
                      Screen
                    </span>

                    <span
                      className="product-details__actions-description-value"
                    >
                      {details.screen}
                    </span>
                  </li>

                  <li
                    className="product-details__actions-description-box"
                  >
                    <span
                      className="product-details__actions-description-title"
                    >
                      Resolution
                    </span>

                    <span
                      className="product-details__actions-description-value"
                    >
                      {details.resolution}
                    </span>
                  </li>

                  <li className="product-details__actions-description-box">
                    <span
                      className="product-details__actions-description-title"
                    >
                      Processor
                    </span>

                    <span
                      className="product-details__actions-description-value"
                    >
                      {details.processor}
                    </span>
                  </li>

                  <li
                    className="product-details__actions-description-box"
                  >
                    <span
                      className="product-details__actions-description-title"
                    >
                      RAM
                    </span>

                    <span
                      className="product-details__actions-description-value"
                    >
                      {details.ram}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="product-details__section">
            <div className="product-details__grid">
              <div className="product-details__about">
                <h2 className="product-details__second-title">About</h2>

                <div className="product-details__underline" />

                <div className="product-details__about-description">
                  {details.description.map((article) => (
                    <article
                      key={article.title}
                      className="product-details__about-article"
                    >
                      <h3 className="product-details__third-title">
                        {article.title}
                      </h3>
                      {article.text.map((text) => (
                        <p className="product-details__about-text" key={text}>
                          {text}
                        </p>
                      ))}
                    </article>
                  ))}
                </div>
              </div>

              <div className="product-details__tech">
                <h2 className="product-details__second-title">Tech specs</h2>

                <div className="product-details__underline" />

                <ul className="product-details__tech-list">
                  <li className="product-details__tech-item">
                    <span className="product-details__tech-title">Screen</span>

                    <span className="product-details__tech-text">
                      {details.screen}
                    </span>
                  </li>

                  <li className="product-details__tech-item">
                    <span className="product-details__tech-title">
                      Resolution
                    </span>

                    <span className="product-details__tech-text">
                      {details.resolution}
                    </span>
                  </li>

                  <li className="product-details__tech-item">
                    <span className="product-details__tech-title">
                      Processor
                    </span>

                    <span className="product-details__tech-text">
                      {details.processor}
                    </span>
                  </li>

                  <li className="product-details__tech-item">
                    <span className="product-details__tech-title">RAM</span>

                    <span className="product-details__tech-text">
                      {details.ram}
                    </span>
                  </li>

                  <li className="product-details__tech-item">
                    <span className="product-details__tech-title">
                      Built in memory
                    </span>

                    <span className="product-details__tech-text">
                      {details.capacity}
                    </span>
                  </li>

                  <li className="product-details__tech-item">
                    <span className="product-details__tech-title">Camera</span>

                    <span className="product-details__tech-text">
                      {details.camera}
                    </span>
                  </li>

                  <li className="product-details__tech-item">
                    <span className="product-details__tech-title">Zoom</span>

                    <span className="product-details__tech-text">
                      {details.zoom}
                    </span>
                  </li>

                  <li className="product-details__tech-item">
                    <span className="product-details__tech-title">Cell</span>

                    <span className="product-details__tech-text">
                      {details.cell.map((cells, ind) => (
                        <Fragment key={cells}>
                          {ind !== details.cell.length - 1
                            ? `${cells}, `
                            : cells}
                        </Fragment>
                      ))}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}

      <section className="product-slider__section">
        {products && (
          <ProductsSlider title="You may also like" products={products} />
        )}
      </section>
    </section>
  );
};
