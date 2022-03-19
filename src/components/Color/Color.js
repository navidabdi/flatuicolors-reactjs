import { useRecoilState } from 'recoil';
import { copyTrigerAtom, menuTrigerAtom, soundTrigerAtom } from '../../atoms';
import './Color.css';

const Color = ({ color, setCopyTheColor, playSound }) => {
  const [copyTriger, setCopyTriger] = useRecoilState(copyTrigerAtom);
  const [soundTriger, setSoundTriger] = useRecoilState(soundTrigerAtom);
  const [menuTriger, setMenuTriger] = useRecoilState(menuTrigerAtom);
  return (
    <>
      <div
        onClick={() => {
          setCopyTheColor(color.hex);
          setCopyTriger(true);
          navigator.clipboard.writeText(color.hex);
          setMenuTriger(false);
          if (soundTriger) playSound();
          setTimeout(() => {
            setCopyTriger(false);
          }, 1000);
        }}
        className="color"
        style={{ backgroundColor: color.hex }}
      >
        <p className="color__name">{color.name}</p>
      </div>
    </>
  );
};

export default Color;
