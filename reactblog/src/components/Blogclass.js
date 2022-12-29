import React from 'react';
import Footer from './Footer'

class Blogclass extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <p className='Blogfun' text-align='centre'>
                           Anyone who's ever tried to feed a child (something other than cereal or ice cream) knows that they don't always eat what you want them to. It's stressful trying to figure out what to make to <b>nourish their tiny bodies</b>. Plus, just because it gets served doesn't mean your kids will eat it. But kids need <b>nutritious food-healthy fats for their brains</b>, calcium for their bones, and all the vitamins and minerals vegetables offer-and more. To take out some of the stress and make sure you're offering your child nutrient-dense foods, we compiled expert tips for mealtimes and a list of <i>healthy foods</i> for kids.
                </p>
                <img src={' https://images.unsplash.com/photo-1669283723966-3437546829cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80 '} height={200} width={200} />

                <table border="1">
                    <tr>
                        <th>Breakfast</th>
                        <th>Lunch</th>
                        <th>Dinner</th>
                    </tr>
                    <tr>
                        <td>Poha</td>
                        <td>Rice</td>
                        <td>Roti</td>
                    </tr>
                    <tr>
                        <td>Dosa</td>
                        <td>Chapati</td>
                        <td>Oots</td>
                    </tr>

                </table>
                <Footer></Footer>

            </>

        )

    }
}

export default Blogclass