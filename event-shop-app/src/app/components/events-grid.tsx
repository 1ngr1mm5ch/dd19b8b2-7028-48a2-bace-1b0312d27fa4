import EventTile from "./event"
import { Event } from "../types";
import { useEffect, useState } from "react";

interface EventGridProps {
  eventList?: Event[]
}

const EventsGrid: React.FC<EventGridProps> = ({eventList}) => {
  
  const [list, setList] = useState<Event[]>([]);
  const [basket, setBasket] = useState<Event[]>([]);

  //adding the list of event items to the state of the component
  useEffect(() => {
    if(list.length == 0 && eventList) {
      setList(eventList)
    }
  },[list.length, eventList]);

  //adding the event to the basket and removes it from the grid
  const addToBasket = (id: string) => {
    const newEvent:Event[] = list.filter(event => event.id == id);
    const newBasket:Event[] = [...basket, ...newEvent];
    setBasket(newBasket);
    setList(list.filter(event => event.id !== id));
  }

  if (!list) {
    return <div>No items provided</div>;
  }
  
  return (
    <div className="events-grid-container">
      {
        list.map((item)=> (
          <EventTile key={item.id} eventDetails={item} onClickHandler={addToBasket} />
        )) 
      }  
    </div>
  );
}

export default EventsGrid;