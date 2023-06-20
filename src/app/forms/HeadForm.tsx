/* eslint-disable no-unused-vars */
import type { ChangeEvent } from 'react';

export default function HeadForm({
  addQuestion,
  hasEditAccess,
  title,
  description,
  onInputChange,
}: {
  addQuestion: () => void;
  hasEditAccess: boolean;
  title: string;
  description: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="rounded-lg border-t-[10px] border-orange-600 bg-white px-8 shadow">
      <div className="space-y-2 pt-4 pb-8">
        <input
          className="w-full border-white bg-white py-3 text-3xl hover:border-gray-300 focus:border-b-2 focus:border-orange-700"
          disabled={!hasEditAccess}
          name="title"
          onChange={onInputChange}
          placeholder="Название"
          value={title}
        />
        <textarea
          className="h-15 w-full resize-y border-b border-white bg-white py-2 hover:border-gray-300 focus:border-b-2 focus:border-orange-700"
          disabled={!hasEditAccess}
          name="description"
          onChange={onInputChange}
          placeholder="Описание"
          value={description}
        ></textarea>
      </div>
      {hasEditAccess && (
        <div className="flex items-center justify-end space-x-3 py-3">
          <button
            className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100"
            onClick={addQuestion}
            type="button"
          >
            Добавить вопрос
          </button>
        </div>
      )}
    </div>
  );
}
