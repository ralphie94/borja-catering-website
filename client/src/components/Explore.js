import React from 'react';
import './Explore.css';

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

  return (
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
        </section>
        </div>
    </div>
  )
}

export default Explore;