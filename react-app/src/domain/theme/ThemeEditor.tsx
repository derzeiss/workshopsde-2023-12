import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeEditor = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="theme-editor">
      <button style={{ background: 'tomato' }} onClick={() => theme.setPrimaryColor('tomato')} />
      <button
        style={{ background: 'olivedrab' }}
        onClick={() => theme.setPrimaryColor('olivedrab')}
      />
    </div>
  );
};
