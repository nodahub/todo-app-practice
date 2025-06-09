import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);

  const addTodo = useCallback((text: string) => {  // 追加ボタン押下時
    const newMemos = [...memos];　　// State変更を正常に検知させるため新たな配列を生成
    newMemos.push(text);　　// テキストボックスの入力内容をメモ配列に追加
    setMemos(newMemos);    // Stateを更新
  }, [memos]);

  const deleteTodo = useCallback((index: number) => {   // 削除ボタン押下時(何番目が押されたかを引数で受け取る)
    const newMemos = [...memos];  // State変更を正常に検知させるため新たな配列を生成
    newMemos.splice(index, 1);  // メモ配列から該当の要素を削除
    setMemos(newMemos);  // Stateを更新
  }, [memos]);  // Stateが変更されたら再実行するようにする

  return { memos, addTodo, deleteTodo };
};
