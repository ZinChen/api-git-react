import React from 'react';
import { FetchServiceConsumer } from '../fetch-service-context';

const withFetchService = () => (Wrapped) => {

  return (props) => {
    return (
      <FetchServiceConsumer>
        {
          (fetchApiService) => {
            return (<Wrapped {...props}
                     fetchApiService={fetchApiService}/>);
          }
        }
      </FetchServiceConsumer>
    );
  }
};

export default withFetchService;
