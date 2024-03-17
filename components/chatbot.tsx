"use client";

import { FC, ChangeEvent, FormEvent, useState, useRef, useEffect, useContext } from 'react';
import { useChat } from 'ai/react';

export default function Chatbot() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main
      ref={ref}
      className="relative flex flex-col w-full max-w-[60vw] h-[30vw] overflow-auto bg-transparent rounded-lg p-4 shadow"
    >
      <span className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-black mb-4 pb-2 block">
        Nivaro AI
      </span>

      <section className="mb-4 flex-grow overflow-auto">
        {messages.map((m) => (
          <div
            className={`mb-2 p-2 rounded-lg ${m.role === "user" ? "bg-blue-500 text-white" : "bg-grey-200 text-black"}`}            key={m.id}
          >
            <strong>{m.role === "user" ? "You: " : "AI: "}</strong>
            {m.content.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </div>
        ))}
      </section>
      <form className="flex mt-auto" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="flex-grow rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me: What does Nivaro do?"
        />
        <button
          className="px-4 rounded-r-lg bg-blue-500 text-white p-2 border-t border-b border-r"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}
