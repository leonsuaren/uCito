import React, { useState, useEffect, Fragment } from 'react'; 

export const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {
  const [state, setState] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
       const response = await getDataFunc();
       setState(response.states)
    })();
  }, []);

  return (
    <Fragment>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state, getDataFunc })
        }
        return child;
      })}
    </Fragment>
  )
}