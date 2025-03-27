import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/oldData/CAMPSITES';
// import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchCampsites = createAsyncThunk(
  'campsites/fetchCampsites',
  async () => {
    // Retornando os dados mockados diretamente
    return CAMPSITES;
  }
);

const initialState = {
  campsitesArray: [],
  isLoading: true,
  errMsg: ''
};

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCampsites.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCampsites.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.campsitesArray = action.payload;
    },
    [fetchCampsites.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch failed';
    }
  }
});

export const campsitesReducer = campsitesSlice.reducer;

// Seletores memoizados
const selectCampsitesArray = (state) => state.campsites.campsitesArray;

export const selectAllCampsites = createSelector(
  [selectCampsitesArray],
  (campsitesArray) => campsitesArray
);

export const selectCampsiteById = createSelector(
  [selectCampsitesArray, (state, id) => id],
  (campsitesArray, id) => campsitesArray.find(
    (campsite) => campsite.id === parseInt(id)
  )
);

export const selectFeaturedCampsite = createSelector(
  [selectCampsitesArray],
  (campsitesArray) => ({
    featuredItem: campsitesArray.find(
      (campsite) => campsite.featured
    ),
    isLoading: false,
    errMsg: ''
  })
);