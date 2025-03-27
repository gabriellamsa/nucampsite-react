import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/oldData/COMMENTS';
// import { baseUrl } from '../../app/shared/baseUrl';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    // Retornando os dados mockados diretamente
    return COMMENTS;
  }
);

export const postComment = createAsyncThunk(
  'comments/postComment',
  async (comment, { dispatch }) => {
    // Simulando o post de um comentário
    const newComment = {
      id: COMMENTS.length + 1,
      ...comment,
      date: new Date(Date.now()).toISOString()
    };
    dispatch(addComment(newComment));
    return newComment;
  }
);

const initialState = {
  commentsArray: COMMENTS,
  isLoading: false,
  errMsg: ''
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log('addComment action.payload:', action.payload);
      console.log('addComment state.commentsArray:', state.commentsArray);
      const newComment = {
        id: state.commentsArray.length + 1,
        ...action.payload
      };
      state.commentsArray.push(newComment);
    }
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.commentsArray = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch failed';
    },
    [postComment.rejected]: (state, action) => {
      alert(`Your comment could not be posted\nError: ${action.error.message}`);
    }
  }
});

export const commentsReducer = commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;

// Seletores memoizados
const selectCommentsArray = (state) => state.comments.commentsArray;

export const selectCommentsByCampsiteId = createSelector(
  [selectCommentsArray, (state, campsiteId) => campsiteId],
  (commentsArray, campsiteId) => {
    return commentsArray.filter(
      (comment) => comment.campsiteId === parseInt(campsiteId)
    );
  }
);