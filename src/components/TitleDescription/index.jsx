import React from 'react';
 
const TitleDescription = ({
  title = '',
  description = '',
  titleClass = 'text-3xl font-semibold text-black  py-2 mt-8 ml-2',
  descriptionClass = 'text-lg text-black px-4 py-2',
}) => {
  return (
    <div className="">
      {title && (
        <h2 className={titleClass}>
          {title}
        </h2>
      )}
      {description && (
        <p className={descriptionClass}>
          {description}
        </p>
      )}
    </div>
  );
};
 
export default TitleDescription;
 