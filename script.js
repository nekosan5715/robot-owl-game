// ストーリー定義
const story = {
    start: {
      text: `あなたは“都市伝説ロボットフクロウ探偵”。  
  闇夜の森に立っている。かすかな羽音が聞こえてきた――何を調べる？`,
      choices: [
        { label: "森の奥へ進む", next: "chapter1" },
        { label: "古びた小屋を調べる", next: "chapter2" }
      ]
    },
    chapter1: {
      text: `あなたは森の奥深くへ足を進める。  
  木々の隙間から微かな光が差し込む…どうする？`,
      choices: [
        { label: "さらに奥へ進む", next: "chapter1enter" },
        { label: "引き返す", next: "start" }
      ]
    },
    chapter2: {
      text: `あなたは古びた小屋の扉をゆっくり押す。  
  軋む音とともに扉が開く…どうする？`,
      choices: [
        { label: "中に入る", next: "chapter2enter" },
        { label: "引き返す", next: "start" }
      ]
    },
    chapter1enter: {
      text: `あなたは森の奥で、不気味に光る古代の紋様が刻まれた石碑を見つけた。  
  謎の文字列が浮かび上がっている…どうする？`,
      choices: [
        { label: "文字を解読しようとする", next: "endtrue" },
        { label: "恐ろしくなり引き返す", next: "start" }
      ]
    },
    chapter2enter: {
      text: `小屋の中には古びた机と、壁にかかった一枚の写真。  
  そこにはフクロウの羽と…何かの手が写っている。どうする？`,
      choices: [
        { label: "写真を持ち帰る", next: "endfalse" },
        { label: "何もせず逃げ出す", next: "start" }
      ]
    },
    endtrue: {
      text: `あなたは文字を解読し、フクロウの秘宝の在り処を示す地図を発見した。  
  真相を掴んだ探偵として、その名は伝説になるだろう――【完】`,
      choices: [
        { label: "最初からやり直す", next: "start" }
      ]
    },
    endfalse: {
      text: `恐怖に駆られて小屋を飛び出したあなた。  
  だが、写真に写る“何か”の視線は、今もあなたを追っている…【完】`,
      choices: [
        { label: "最初からやり直す", next: "start" }
      ]
    }
  };
  
  // 現在位置
  let current = "start";
  
  function render() {
    const node = story[current];
    document.getElementById("text").innerText = node.text;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    node.choices.forEach(c => {
      const a = document.createElement("a");
      a.innerText = c.label;
      a.href = "#";
      a.className = "choice";
      a.onclick = e => {
        e.preventDefault();
        current = c.next;
        render();
      };
      choicesDiv.appendChild(a);
    });
  }
  
  // 初回表示
  render();
  