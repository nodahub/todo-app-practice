import { ChangeEvent, useState, FC, useCallback } from 'react';
import styled from "styled-components";
import { MemoList } from './MemoList';
import { useMemoList } from '../hooks/useMemoList';

export const App: FC = () => {
  const { memos, addTodo, deleteTodo } = useMemoList();  // カスタムフックを使用してメモのStateと追加・削除関数を取得
  const [text, setText] = useState<string>("");

  // テキストボックス入力時に入力内容をStateに保存
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(e);
  };

  const onClickAdd = () => {  // 追加ボタン押下時
    addTodo(text);  // テキストボックスの入力内容をメモ配列に追加
    setText("");           　// テキストボックスを空にする
  };

  const onClickDelete = useCallback((index: number) => {   // 削除ボタン押下時(何番目が押されたかを引数で受け取る)
    deleteTodo(index);  // メモ配列から該当の要素を削除
  }, [deleteTodo]);  // Stateが変更されたら再実行するようにする

  return (
    <>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete}/>
    </>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;