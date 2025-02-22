"use client";
import React, { useState } from "react";

type Props = {
  onClose: () => void;
  onCreate: (data: {
    title: string;
    start: Date;
    end: Date;
    color: string;
  }) => void;
};

export function CreateEventModal({ onClose, onCreate }: Props) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [color, setColor] = useState("bg-blue-500");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !start || !end) return;
    onCreate({
      title,
      start: new Date(start),
      end: new Date(end),
      color,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-neutral-800 text-gray-200 p-6 rounded-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Create Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded bg-neutral-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          {/* Start/End */}
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block text-sm mb-1">Start Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 rounded bg-neutral-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">End Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 rounded bg-neutral-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Color */}
          <div>
            <label className="block text-sm mb-1">Event Color</label>
            <select
              className="w-full px-3 py-2 rounded bg-neutral-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="bg-blue-500">Blue</option>
              <option value="bg-green-500">Green</option>
              <option value="bg-red-500">Red</option>
              <option value="bg-yellow-500">Yellow</option>
              <option value="bg-purple-500">Purple</option>
            </select>
          </div>
          {/* Actions */}
          <div className="flex items-center justify-end mt-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
