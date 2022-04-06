import React, { useState, useEffect } from "react";

function AjaxCall(props) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();

  const url = props.url;
  console.log(props);



  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return <>{props.activeTab === `${props.id}` ?  <div dangerouslySetInnerHTML={{ __html: items }}></div> : null}</>;
}

export default AjaxCall;
