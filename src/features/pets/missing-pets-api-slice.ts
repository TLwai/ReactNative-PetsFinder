/**
 * Copyright (c) Wai L.
 *
 * This source code is licensed under the ___ license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @created by:     Wai L
 * @created date:   26/5/2023
 * @modified by:    Wai L
 * @modified date:  26/5/2023
 */
// moden redux
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const MISSING_PETS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311';

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
  status: string;
  remark: string;
}

export const missingPetsApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', MISSING_PETS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return '/breeds?limit=' + limit; // todo ${limit} is not working here
        },
      }),
    };
  },
});

export const {useFetchBreedsQuery} = missingPetsApiSlice;
