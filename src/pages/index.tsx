import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [statusFilter, setStatusFilter] = useState<
    'all' | 'completed' | 'pending'
  >('all')
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="mt-10 flex w-[460px] ">
          <button
            className={`mr-4 ${
              statusFilter === 'all'
                ? ' text-blue-500 w-[67px] gap-2 rounded-full border bg-gray-700 px-[15px] py-2 font-normal text-white'
                : 'w-[67px] rounded-full border border-gray-600 bg-white text-gray-500'
            }`}
            onClick={() => setStatusFilter('all')}
          >
            All
          </button>
          <button
            className={`mr-4 ${
              statusFilter === 'completed'
                ? 'text-blue-500 sm:w-104 font-manrope gap-2 rounded-full border bg-gray-700 px-[15px] py-2 text-base font-normal text-white'
                : 'sm:w-104 font-manrope rounded-full border border-gray-600 bg-white px-[15px] py-2 text-base font-normal text-gray-500 '
            }`}
            onClick={() => setStatusFilter('completed')}
          >
            Completed
          </button>
          <button
            className={`mr-4 ${
              statusFilter === 'pending'
                ? 'text-blue-500 sm:w-104 font-manrope gap-2 rounded-full border bg-gray-700 px-[15px]  py-2 text-base font-normal  text-white'
                : 'sm:w-104 font-manrope rounded-full border border-gray-600 bg-white px-[15px] py-2 text-base font-normal text-gray-500'
            }`}
            onClick={() => setStatusFilter('pending')}
          >
            Pending
          </button>
        </div>

        <div className="pt-10">
          <TodoList statusFilter={statusFilter} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
