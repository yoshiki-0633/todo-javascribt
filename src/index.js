import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //未完了リスト生成
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleateFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  console.log(completeButton);
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deleateFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //ToDO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    //戻すbuttonのイベントの生成
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を削除
      const deleateTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleateTarget);
      //textを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ
  const deleateButton = document.createElement("button");
  deleateButton.innerText = "削除";
  console.log(deleateButton);
  deleateButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleateFromIncompleteList(deleateButton.parentNode);
  });

  //divタグに子要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleateButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
