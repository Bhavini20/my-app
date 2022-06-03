import Card from './components/Card';
import './styles/Home.css';

function Home()
{
    return(
        <ul className="cards">
        <li>
        <Card 
          cardImage={"https://i.imgur.com/oYiTqum.jpg"}
          cardThumb={"https://i.imgur.com/7D7I6dI.png"}
          cardTitle={"Jessica Parker"}
          cardStatus={"1 hour ago"}
          cardDesc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperkjkjkjkiores, blanditiis?"}
        />
        </li>
        <li>
        <Card 
          cardImage={"https://i.imgur.com/2DhmtJ4.jpg"}
          cardThumb={"https://i.imgur.com/sjLMNDM.png"}
          cardTitle={"kim Cattrall"}
          cardStatus={"3 hours ago"}
          cardDesc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"}
        />
        </li>
        <li>
        <Card 
          cardImage={"https://i.imgur.com/oYiTqum.jpg"}
          cardThumb={"https://i.imgur.com/7D7I6dI.png"}
          cardTitle={"Jessica Parker"}
          cardStatus={"1 hour ago"}
          cardDesc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"}
        />
        </li>
        <li>
        <Card 
          cardImage={"https://i.imgur.com/2DhmtJ4.jpg"}
          cardThumb={"https://i.imgur.com/sjLMNDM.png"}
          cardTitle={"kim Cattrall"}
          cardStatus={"3 hours ago"}
          cardDesc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"}
        />
        </li>
      </ul>
    )
}

export default  Home


/*

Benefit of using a Card component instead of hard-coding:

From backend, we usually get an array of objects, which might look like:
[
  {
    name: abc,
    phone: 123
  },
  {
    name: xyz,
    phone: 345,
  },
  ...
]

By using components, a simple map() function(equivalent to a for loop) 
can be used to create component of each object of array
Eg:

return <div> array.map((object)=>{return <Card name={object.name} phone={object.phone}>}</div>

*/