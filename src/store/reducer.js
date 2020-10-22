export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //   token:
  //     "BQAazt_nNZpZwO9dwUNcJGpNN6REF482brO0vtJPG8DMFfaX1gUVTt4p9PU9H741WWoN0TuHiKU1ynsq2WGAMMfvy3qZGzXeTpeI6AkOm_IqzUUACMGv20j_kbyJ3z58SoDxRmho3OUg5k0o0QrAKWxrrDgWhVazXaivkII_8fIbyo68usZq",
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
