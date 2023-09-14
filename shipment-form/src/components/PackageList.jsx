import React from 'react';
import Package from './Package';
import './PackageList.css';
import { useSelector } from 'react-redux';

function PackageList() {
  const packageList = useSelector((state) => {
    return state.packageList;
  });
  return (
    <div>
      <h2>Список посылок</h2>
      <div>
        {packageList.map((element) => {
          return <Package key={element.id} metaPackage={element} />;
        })}
      </div>
    </div>
  );
}

export default PackageList;
