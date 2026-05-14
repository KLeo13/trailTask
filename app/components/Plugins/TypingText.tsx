import { useEffect, useState } from 'react';

type TypingTextProps = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
};

const TypingText: React.FC<TypingTextProps> = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delay = 1200,
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typeSpeed);

      if (text === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deleteSpeed);

      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);

  return (
    <span>
      {text}
      <span
        style={{
          borderRight: '2px solid',
          marginLeft: 2,
          animation: 'blink 1s infinite',
        }}
      />
    </span>
  );
};

export default TypingText;
``