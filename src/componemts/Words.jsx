import { useMemo, useState } from "react";
import styles from "./Words.module.css";


const Words = () => {
  const [words, setWords] = useState([
    {
      text: "Fear leads to self-doubt which is the worst enemy of creativity.",
      author: "David Ogilvy",
      Korean: "두려움은 창조성의 가장 나쁜 적인 자기 의심으로 이끕니다.",
    },
    {
      text: "Be careful how you are talking to yourself because you are listening.",
      author: "Lisa M. Hayes",
      Korean:
        "당신 스스로에게 어떻게 말을 하는 지 조심하세요, 왜냐면 당신이 듣고 있으니까요",
    },
    {
      text: "If you want lift yourself up, lift up someone else.",
      author: "Booker T. Washington",
      Korean:
        "당신의 몸을 일으켜세우고 싶다면, 다른 사람을 (먼저) 일으켜 세워주세요.",
    },
    {
      text: "Follow your instincts. That's where true wisdom manifests itself.",
      author: "Oprah Winfrey",
      Korean: "당신의 직감을 따르세요. 진정한 지혜가 나타나는 곳입니다.",
    },
    {
      text: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controvercy",
      author: "Martin Luther King Jr.",
      Korean:
        "한 사람의 궁극적인 척도는 편안과 편리한 순간에 서있는 곳이 아니라, 도전과 논쟁의 순간에 서있는 곳입니다.",
    },
    {
      text: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
      author: "Kobe Bryant",
      Korean:
        "가장 중요한 것은 사람들이 하고 싶은 일에는 무엇이든지간에 훌륭해질 수 있도록 시도하고 영감을 주는 것이 랍니다.",
    },
    {
      text: "Do what you dream of doing even while you're afraid",
      author: "Arianna Huffington",
      Korean: "두렵더라도 당신이 하는 것을 꿈꾸는 것을 하세요!",
    },
    {
      text: "When one paints an ideal, one does not need to limit one's imagination.",
      author: "Ellen Key",
      Korean: "누군가 이상을 그린다면, 그 상상을 제한할 필요는 없답니다.",
    },
    {
      text: "Rise above the storm and you will find the sunshine.",
      author: "Mario Fernandez",
      Korean: " 폭풍위로 올라서면, 햇살을 찾을 수 있습니다.",
    },
    {
      text: "Do not judge me by success, judge me by how many times I fell down and got back up again.",
      author: "Nelson Mandela",
      Korean:
        "저의 성공으로 저를 판단하지말구요, 제가 얼마나 많이 넘어지고 다시 일어섰는지로 판단해주세요",
    },
  ]);

  // 글귀를 함수로 만들어 랜덤하게 출력
  // printWord 가 return 의 htrml 안에 있기 때문에 계속해서 실행
  // 이 함수를 고정하기 위해 useCallback 혹은 useMemo를 사용한다.

  // Return 값을 고정
  // useMemo를 사용했을때 변수안에 들어가는것 = return

  // Return 값을 고정 useMemo Return 값을 고정
  const printWord = useMemo(() => {
    const randomnum = Math.floor(Math.random() * words.length);
    return words[randomnum];
  }, []);


  return (
    <div>
      {/** useMemo를 사용했을 경우, 그 함수의 return 값이 변수안에 들어가게 된다
       * 사용할때 변수 이름으로만 사용 해야한다.
       */}
      <div className={styles.textbox}>
        <div className={styles.words}>
          <p>{printWord.text}</p>
        </div>

        <div className={styles.kowords}>
          <p>{printWord.Korean}</p>
        </div>

        <div className={styles.words}>
          <p>{printWord.author}</p>
        </div>

      </div>



    </div>
  );
};

export default Words;
