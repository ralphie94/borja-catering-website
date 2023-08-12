import React from 'react';
import './Explore.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Explore = () => {
    const int_menu_left = [
        {
            title:'Spring Mix Salad Ⓥ',
            desc:'Consisting a variety of different lettuce, including spinach and tender baby lettuce.'
        },
        {
            title:'Beef In Its Own Juice',
            desc:'Tender pieces of beef slowly and carefully cooked in its own juice and accompanied with delicious brown sauce.'
        },
        {
            title:'Chicken In Creamy Champagne Sauce',
            desc:'Chicken breast cut to bite size pieces accompanied with its Zinfandel cream sauce.'
        },
        {
            title:'Peruvian Style Rice',
            desc:'Rice cooked with a hint of garlic and sea salt.'
        },
        {
            title:'Vegetables Medley',
            desc:'A blend of baby carrots, cut corn and broccoli florets seasoned with our flavorful spices and margarine.'
        },
        {
            title:'Fresh Fruit Ⓥ',
            desc:'A blend of watermelon, cantaloupe and other abundant fruit, handpicked and cut to bite size pieces.'
        },
        {
            title:'French Roll Bread Ⓥ',
            desc:'Individually sliced pieces of French Roll Bread served in a decorative manner.'
        }
    ]

    const french_menu = [
        {
            title:'Spring Mix Salad Ⓥ',
            desc:'Consisting a variety of different lettuce, including spinach and tender baby lettuce.'
        },
        {
            title:'Beef Marengo',
            desc:'Tender, bite size pieces of beef in brown gravy and accompanied with mushrooms and tomatoes.'
        },
        {
            title:'Chicken Tarragon',
            desc:'Sauteed chicken breast cut to bite size pieces and cooked with a creamy tarragon Zinfandel sauce.'
        },
        {
            title:'Rice Pilaf',
            desc:'Rice seasoned with our flavorful spices and fine Mediterranean herbs.'
        },
        {
            title:'Vegetables Medley',
            desc:'A blend of baby carrots, cut corn and broccoli florets seasoned with our flavorful spices and margarine.'
        },
        {
            title:'Fresh Fruit Ⓥ',
            desc:'A blend of watermelon, cantaloupe and other abundant fruit, handpicked and cut to bite size pieces.'
        },
        {
            title:'French Roll Bread Ⓥ',
            desc:'Individually sliced pieces of French Roll Bread served in a decorative manner.'
        }
    ]

    const italian_menu = [
        {
            title:'Caesar Salad Ⓥ',
            desc:'Caesar salad covered with croutons and parmesan cheese.'
        },
        {
            title:'Beef Marinara',
            desc:'Juicy and tender, bite size pieces of beef with tomato, basil, garlic sauce and fine Italian seasoning.'
        },
        {
            title:'Chicken Piccata',
            desc:'Chicken breast cut into bite size pieces with a white creamy caper sauce.'
        },
        {
            title:'Creamy Alfredo Pasta',
            desc:'Pasta served in our delightful and mouthwatering take on the Alfredo sauce.'
        },
        {
            title:'Vegetables Medley',
            desc:'A blend of baby carrots, cut corn and broccoli florets seasoned with our flavorful spices and margarine.'
        },
        {
            title:'Fresh Fruit Ⓥ',
            desc:'A blend of watermelon, cantaloupe and other abundant fruit, handpicked and cut to bite size pieces.'
        },
        {
            title:'French Roll Bread Ⓥ',
            desc:'Individually sliced pieces of French Roll Bread served in a decorative manner.'
        }
    ]

    const mexican_menu = [
        {
            title:'Spring Mix Salad Ⓥ',
            desc:'Consisting a variety of different lettuce, including spinach and tender baby lettuce.'
        },
        {
            title:'Chicken Fajitas',
            desc:'Strips of chicken cut to bite size pieces, served with bell peppers , onions, cilantro and seasoned with Mexican spices.'
        },
        {
            title:'Beef Fajitas',
            desc:'Strips of bite sized beef pieces, cooked with bell peppers, onions, cilantro and seasoned with Mexican spices.'
        },
        {
            title:'Mexican Style Beans',
            desc:'Fresh cooked beans taking on the Mexican style (of course).'
        },
        {
            title:'Mexican Rice',
            desc:'Rice with green peas and carrots.'
        },
        {
            title:'Fresh Fruit Ⓥ',
            desc:'A blend of watermelon, cantaloupe and other abundant fruit, handpicked and cut to bite size pieces.'
        },
        {
            title:'French Roll Bread Ⓥ',
            desc:'Individually sliced pieces of French Roll Bread served in a decorative manner.'
        }
    ]

    const south_menu = [
        {
            title:'Spring Mix Salad Ⓥ',
            desc:'Consisting a variety of different lettuce, including spinach and tender baby lettuce.'
        },
        {
            title:'BBQ Pulled Pork',
            desc:'Pork pulled apart into smaller, easily edible portions and covered in our delicious BBQ sauce.'
        },
        {
            title:'Roasted Chicken',
            desc:'Oven roasted chicken, seasoned with Cajun spices.'
        },
        {
            title:'Roasted Red Potatoes',
            desc:'Dill seasoned and oven roasted red potatoes, individually chopped.'
        },
        {
            title:'Corn On The Cob',
            desc:'Proportionally chopped corn on the cob, seasoned with our special spices.'
        },
        {
            title:'Fresh Fruit Ⓥ',
            desc:'A blend of watermelon, cantaloupe and other abundant fruit, handpicked and cut to bite size pieces.'
        },
        {
            title:'French Roll Bread Ⓥ',
            desc:'Individually sliced pieces of French Roll Bread served in a decorative manner.'
        }
    ]

    const sirloin_menu = [
        {
            title:'Spring Mix Salad Ⓥ',
            desc:'Consisting a variety of different lettuce, including spinach and tender baby lettuce.'
        },
        {
            title:'Oven Roast Top Sirloin',
            desc:'Tender pieces of beef slowly and carefully cooked in its own juice and accompanied with delicious brown sauce.'
        },
        {
            title:'Chicken In Creamy Champagne Sauce',
            desc:'Chicken breast cut to bite size pieces accompanied with its Zinfandel cream sauce.'
        },
        {
            title:'Peruvian Style Rice',
            desc:'Rice cooked with a hint of garlic and sea salt.'
        },
        {
            title:'Vegetables Medley',
            desc:'A blend of baby carrots, cut corn and broccoli florets seasoned with our flavorful spices and margarine.'
        },
        {
            title:'Fresh Fruit Ⓥ',
            desc:'A blend of watermelon, cantaloupe and other abundant fruit, handpicked and cut to bite size pieces.'
        },
        {
            title:'French Roll Bread Ⓥ',
            desc:'Individually sliced pieces of French Roll Bread served in a decorative manner.'
        }
    ]

  return (
    <>
    <div className='explore-container'>
        <div className='menu-wrap'>
        <div className='menu-left'>

        </div>
        <section className='menu-container'>
        <h1>The International Menu</h1>
        <p>International cuisine that features exquisite authentic dishes from various regions around the world.</p>
            <div className='menu-right'>
                    {int_menu_left.map((item, i) => (
                        <div className='menu-container-right'>
                            <p className='food-title'>{item.title}</p>
                            <p className='food-desc'>{item.desc}</p>
                        </div>
                    ))}
            </div>
            <div className="menu-btn">
                    <Link to="/contact"><p style={{color: '#000'}}>Request a Quote</p></Link>
            </div>
        </section>
        </div>

        <div className='reverse-menu-wrap'>
        <div className='menu-left'>

        </div>
        <section className='menu-container'>
        <h1>The French Buffet</h1>
        <p>A delightful array of the French styled cuisine.</p>
            <div className='menu-right'>
                    {french_menu.map((item, i) => (
                        <div className='menu-container-right'>
                            <p className='food-title'>{item.title}</p>
                            <p className='food-desc'>{item.desc}</p>
                        </div>
                    ))}
            </div>
            <div className="menu-btn">
                    <Link to="/contact"><p style={{color: '#000'}}>Request a Quote</p></Link>
            </div>
        </section>
        </div>

        <div className='menu-wrap'>
        <div className='menu-left'>

        </div>
        <section className='menu-container'>
        <h1>El Italian Buffet</h1>
        <p>A wonderful combination of Italian Styled Cuisine, from the infamous Alfredo sauce to a creamy champagne sauce.</p>
            <div className='menu-right'>
                    {italian_menu.map((item, i) => (
                        <div className='menu-container-right'>
                            <p className='food-title'>{item.title}</p>
                            <p className='food-desc'>{item.desc}</p>
                        </div>
                    ))}
            </div>
            <div className="menu-btn">
                    <Link to="/contact"><p style={{color: '#000'}}>Request a Quote</p></Link>
            </div>
        </section>
        </div>

        <div className='reverse-menu-wrap'>
        <div className='menu-left'>

        </div>
        <section className='menu-container'>
        <h1>The Mexican</h1>
        <p>Bold in taste yet easily enjoyable to the palate.</p>
            <div className='menu-right'>
                    {mexican_menu.map((item, i) => (
                        <div className='menu-container-right'>
                            <p className='food-title'>{item.title}</p>
                            <p className='food-desc'>{item.desc}</p>
                        </div>
                    ))}
            </div>
            <div className="menu-btn">
                    <Link to="/contact"><p style={{color: '#000'}}>Request a Quote</p></Link>
            </div>
        </section>
        </div>

        <div className='menu-wrap'>
        <div className='menu-left'>

        </div>
        <section className='menu-container'>
        <h1>South Of The West Buffet</h1>
        <p>Pleasant American styled food from the Southwest, like a cowboy!</p>
            <div className='menu-right'>
                    {south_menu.map((item, i) => (
                        <div className='menu-container-right'>
                            <p className='food-title'>{item.title}</p>
                            <p className='food-desc'>{item.desc}</p>
                        </div>
                    ))}
            </div>
            <div className="menu-btn">
                    <Link to="/contact"><p style={{color: '#000'}}>Request a Quote</p></Link>
            </div>
        </section>
        </div>

        <div className='reverse-menu-wrap'>
        <div className='sirloin-menu-left'>

        </div>
        <section className='menu-container'>
        <h1>Top Sirloin Menu</h1>
        <p>Savory twist to the International Menu, being the Roasted Top Sir Loin. The star of this menu.</p>
            <div className='menu-right'>
                    {sirloin_menu.map((item, i) => (
                        <div className='menu-container-right'>
                            <p className='food-title'>{item.title}</p>
                            <p className='food-desc'>{item.desc}</p>
                        </div>
                    ))}
            </div>
            <div className='sirloin-buttons'>
                <div className="menu-btn">
                    <Link to="/contact"><p style={{color: '#000'}}>Request a Quote</p></Link>
                </div>
                <div className="explore-menu-btn">
                    <Link to="/sirloin-menu"><p style={{color: '#fff'}}>Explore Menu</p></Link>
                </div>
            </div>
        </section>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Explore;