import React from 'react';
import './Package.css';

function Package({ metaPackage }) {
  return (
    <div className="pakcage-item">
      <p>Посылка: {metaPackage.id}</p>
      <div>
        <p>Получатеватель:</p>
        <p>
          {`${metaPackage.addresseeLastName} ${metaPackage.addresseeFirstName}
          ${metaPackage.addresseeMiddleName}`}
        </p>
      </div>
      <div>
        <p>Параметры отправления:</p>
        <p>
          {metaPackage.packageType}{' '}
          {`${metaPackage.packageLendth}x${metaPackage.packageWidth}x${metaPackage.packageHeight}`}{' '}
          {`Вес: ${metaPackage.packageWeight}`}{' '}
          {insurance && 'Страховка включена'}
        </p>
      </div>
    </div>
  );
}

export default Package;
