import axios, { AxiosError } from "axios";
import { setUser } from "../store/userReducer";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";

export async function Registr(email: string, password: string) {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/registration",
      {
        email,
        password,
      }
    );
    console.log(response.data.message);
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.response)
      console.log(axiosError.response.data);
    else {
      console.log(axiosError.message)
    }
  }
}

export function Log(email: string, password: string): ThunkAction<void, RootState, unknown, AnyAction> {
  return async dispatch => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token)
      console.log(response.data);
    } catch (error) {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        console.log(axiosError.response.data);
        console.log('fvfv');
      }
      else {
        console.log(axiosError.message)
        console.log('ffff')
      }
    }
  };
}

export function Auth(): ThunkAction<void, RootState, unknown, AnyAction> {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/auth', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (error) {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        console.log(axiosError.response.data);
      }
      else {
        console.log(axiosError.message)
      }
    }
  }
}
