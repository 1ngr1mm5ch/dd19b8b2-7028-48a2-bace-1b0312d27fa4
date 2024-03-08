'use client'

import "./styles/page.module.scss";

import { useEffect, useState } from "react";
import EventsGrid from "./components/events-grid";
import Filters from "./components/filters";

const Home: React.FC = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    if(data.length == 0) {
      fetchData();
    }
  })
 
  //fetching the data from the endpoint
  const fetchData = async () => {
    try {
      const response = await fetch('https://teclead-ventures.github.io/data/london-events.json');
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //pushes the fetched dato into the event interface
  const transformedData: Event[] = data?.map((item => {
    return {
      id: item._id,
      title: item.title,
      imageUrl: item.flyerFront,
      locationName: item.venue.name,
      location: item.venue.direction,
      date: new Date(item.date),
      start: new Date(item.startTime),
      end: new Date(item.endTime)
    }
  }));

  //sorting the array by date
  const sortedTransformedData: Event[] = transformedData.sort((a, b) => {
    return a.date.getTime() - b.date.getTime();
  })


  return (
    <div className="main">
      <Filters></Filters>
      <EventsGrid eventList={sortedTransformedData}></EventsGrid>
    </div>
  );
}

export default Home;
