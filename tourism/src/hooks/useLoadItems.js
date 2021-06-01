import React, { useState, useEffect } from 'react';
import sendRequest from '../ajaxUtils.js';

function useLoadItems(url) {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const tours = await sendRequest(url);
    setData(JSON.parse(tours));
  }, [])

  return data;
}

export default useLoadItems;
