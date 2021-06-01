import React, { useContext, useReducer, useEffect } from 'react';
import { TourContext } from '../TourContext.js';
import Tour from './Tour.js';
import reducer from '../reducer.js';

function TourList() {
  const initialState = {tours: [], toursAvailable: false, headerText: "No Tours Available"};
  const tours = useContext(TourContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRemove = (e) => {
    dispatch({type: "REMOVE_ITEM", payload: e.target.id});
  }

  const handleReload = (e) => {
    dispatch({type: "LOADING"});
    window.location.reload(false);
  }

  useEffect(() => {
    tours.map((tour) => { dispatch({type: "ADD_ITEM", payload: tour })});
  }, [tours]);

  useEffect(() => {
    if (state.tours.length > 0) {
      dispatch({type: "HAVE_TOURS"});
    }
    else {
      dispatch({type: "NO_TOURS"});
    }
  }, [state.tours]);

  return (
    <TourContext.Provider value={handleRemove}>
      <header className="App-header">
        <h1>{state.headerText}</h1>
        <div className="underline"></div>
      </header>
      <div className="button-holder">
        {state.toursAvailable || <button onClick={handleReload} id="reload">Reload</button>}
      </div>
      <section className="tour-list">
        {state.tours.map((tour) => {
          return <Tour id={tour.id} name={tour.name} desc={tour.desc} price={tour.price} href={tour.href} />
        })}
      </section>
    </TourContext.Provider>
  )
}


export default TourList
