import React from 'react';
import Paper from '../Paper';
import Language from '../Language';

const Languages = () => {
  return (
    <Paper>
      <h2>Languages</h2>
      <div className="flex flex-column flex-row-ns justify-between ph3 mb3">
        <Language
          title="Spanish"
          levelNumber={100}
          level="Native"
        />
        <Language
          title="English"
          levelNumber={75}
          level="Advanced"
        />
        <Language
          title="Esperanto"
          levelNumber={25}
          level="Basic"
        />
      </div>
      <div className="flex flex-column f7">
        <span>English - B2 European common framework.</span>
        <span><a href="https://www.dyned.com/us/content/certverify">DynEd International, Inc. Certification.</a></span>
        <span>Code: ur-pnpb-b10u-aq</span>
      </div>
    </Paper>
  );
};

export default Languages;