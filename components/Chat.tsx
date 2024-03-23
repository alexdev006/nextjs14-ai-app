"use client";

import { useChat } from "ai/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="flex flex-col items-center justify-between p-4 border w-4/5 mx-auto rounded-md my-4">
      <div className="my-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus id
        inventore beatae aspernatur impedit, officiis rerum labore quibusdam
        cum, aperiam qui voluptatibus explicabo dolorem in exercitationem
        aliquam dolorum, quisquam doloribus.
      </div>
      <div className="flex w-2/3 mx-auto items-center space-x-2 mb-4">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-2">
          <Input
            type="email"
            placeholder="Type your question here..."
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" className="">
            Ask Ai
          </Button>
        </form>
      </div>
      <div className="flex flex-col justify-start  w-2/3 p-4 rounded-md mb-4">
        <ul>
          {messages.map((m, index) => (
            <li key={index}>
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
