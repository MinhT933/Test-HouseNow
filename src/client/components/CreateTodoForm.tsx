import { useState } from 'react'

import { api } from '@/utils/client/api'

/**
 * QUESTION 1:
 * -----------
 * Style the "Add" button so that it looks like the design in Figma.
 *
 * NOTE: You must use tailwindcss and className. Do not use other methods (eg.
 * inline styles, separate css files, css modules, etc.) unless absolutely
 * necessary. This applies to all styling-related questions in this assignment.
 *
 * Documentation references:
 *  - https://tailwindcss.com
 *  - https://www.youtube.com/watch?v=mr15Xzb1Ook
 *
 *
 *
 * QUESTION 2:
 * -----------
 * Currently our form is not keyboard accessible. Users cannot hit
 * <Enter> right after typing to submit the form (add new todo). Fix this issue.
 */

export const CreateTodoForm = () => {
  const [todoBody, setTodoBody] = useState('')
  const [error, setError] = useState('')
  const apiContext = api.useContext()

  const { mutate: createTodo, isLoading: isCreatingTodo } =
    api.todo.create.useMutation({
      onSuccess: () => {
        apiContext.todo.getAll.refetch()
        setTodoBody('')
      },
    })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!todoBody) {
      setError('Please enter a todo item')
      return
    }

    createTodo({
      body: todoBody,
    })
  }

  return (
    <>
      {error && <div>{error}</div>}
      <form
        role="form"
        aria-label="Create new todo"
        className="group flex items-center justify-between rounded-12 border border-gray-200 py-2 pr-4 focus-within:border-gray-400"
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit
          }
        }}
      >
        <label htmlFor={TODO_INPUT_ID} className="sr-only">
          Add todo
        </label>

        <input
          id={TODO_INPUT_ID}
          type="text"
          placeholder="Add todo"
          value={todoBody}
          tabIndex={0}
          onChange={(e) => {
            setTodoBody(e.target.value)
          }}
          className="flex-1 px-4 text-base placeholder:text-gray-400 focus:outline-none"
        />

        <button
          type="submit"
          className="font-manrope w-69 gap-2 rounded-full border border-gray-700 bg-gray-700 px-[15px] py-1 text-base font-normal text-white"
          disabled={isCreatingTodo}
        >
          Add
        </button>
      </form>
    </>
  )
}

const TODO_INPUT_ID = 'todo-input-id'
