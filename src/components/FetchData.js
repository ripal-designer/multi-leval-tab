import React, { useState, useEffect } from "react";
import AjaxCall from "./AjaxCall";

function FetchData(props) {
  return (
    <>
      {props.seccat.map((data, index) => {
        const url = `${data.url}`;
        // console.log(url)

        return (
          <>
            <AjaxCall url={data.url} activeTab={props.activeTab} id={data.id} />
          </>
        );
      })}
    </>
  );
}

export default FetchData;
