import { useRouteError } from 'react-router-dom';

interface ErrorScreenProps {
  msg?: string;
}

export const ErrorScreen = ({ msg }: ErrorScreenProps) => {
  const err = useRouteError();
  return (
    <div className="error-screen">
      <h1>Oops, something went wrong...</h1>
      {msg && <p>{msg}</p>}
      {!!err && <div>{JSON.stringify(err)}</div>}
    </div>
  );
};
