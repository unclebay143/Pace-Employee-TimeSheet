import { SET_MESSAGE, CLEAR_MESSAGE } from "../types";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});


/* 

  MESSAGE TEMPLATE 

  {message && (
      <div className="form-group">
      <div className={ isLoggedIn ? "alert alert-success" : "alert alert-danger" } role="alert">
          {message}
      </div>
      </div>
    )}

*/