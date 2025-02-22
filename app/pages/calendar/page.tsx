"use client";

import React, { useState } from "react";
import { Layout } from "@/app/components/layout/layout";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
// The default RBC layout styles (white-ish) are here:
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

interface CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description?: string;
}

export default function CalendarPage() {
  // Sample events
  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: 1,
      title: "Team Standup",
      start: new Date(),
      end: new Date(Date.now() + 60 * 60 * 1000),
      description: "Daily team sync",
    },
    {
      id: 2,
      title: "Project Alpha Demo",
      start: new Date(new Date().setDate(new Date().getDate() + 1)), // tomorrow
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
      description: "Showcasing the new AI features",
    },
  ]);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [slotInfo, setSlotInfo] = useState<{ start: string; end: string }>({
    start: "",
    end: "",
  });

  /** Create a new event in local state. */
  const handleCreateEvent = (data: Omit<CalendarEvent, "id">) => {
    const newId = Date.now();
    setEvents((prev) => [...prev, { id: newId, ...data }]);
    setModalOpen(false);
  };

  /** When user selects a day/time slot, open modal with start/end. */
  const handleSelectSlot = (slot: {
    start: Date;
    end: Date;
    action: "select" | "click" | "doubleClick";
  }) => {
    setSlotInfo({
      start: toDateTimeLocal(slot.start),
      end: toDateTimeLocal(slot.end),
    });
    setModalOpen(true);
  };

  /** Click an existing event (could open an “edit” modal). */
  const handleSelectEvent = (event: CalendarEvent) => {
    alert(`Event selected: ${event.title}`);
  };

  return (
    <Layout>
      {/* Main page background in dark with Tailwind classes. */}
          <div className="bg-black text-gray-100 min-h-screen w-full p-6">
        {/* Header */}
        <header className="mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Calendar</h1>
            <button
              onClick={() => {
                setSlotInfo({ start: "", end: "" });
                setModalOpen(true);
              }}
              className="px-4 py-2 bg-neutral-000 rounded hover:bg-gray-700 transition"
            >
              + Create Event
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Manage your tasks and events here.
          </p>
        </header>

        {/* RBC Container with Tailwind classes for dark background, etc. */}
        <div className="rounded-md bg-neutral-900 p-4 shadow-lg">
          <div className="dark-calendar-wrapper">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "70vh" }}
              selectable
              onSelectSlot={handleSelectSlot}
              onSelectEvent={handleSelectEvent}
              defaultView={Views.MONTH}
              views={["month", "week", "day"]}
              components={{
                toolbar: CustomToolbar,
              }}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <CreateEventModal
          onClose={() => setModalOpen(false)}
          onCreate={handleCreateEvent}
          slotInfo={slotInfo}
        />
      )}
    </Layout>
  );
}

/** A custom toolbar using Tailwind classes (no separate CSS). */
function CustomToolbar({ label, onNavigate, onView }: any) {
  return (
    <div className="flex items-center justify-between mb-2">
      {/* Left side: nav buttons */}
      <div className="space-x-2">
        <button
          onClick={() => onNavigate("TODAY")}
          className="px-2 py-1 rounded bg-zinc-700 hover:bg-gray-600 text-white"
        >
          Today
        </button>
        <button
          onClick={() => onNavigate("PREV")}
          className="px-2 py-1 rounded bg-zinc-700 hover:bg-gray-600 text-white"
        >
          &lt;
        </button>
        <button
          onClick={() => onNavigate("NEXT")}
          className="px-2 py-1 rounded bg-zinc-700 hover:bg-gray-600 text-white"
        >
          &gt;
        </button>
      </div>

      {/* Center: Month/Year label */}
      <span className="font-semibold text-white">{label}</span>

      {/* Right side: view buttons */}
      <div className="space-x-2">
        <button
          className="px-2 py-1 rounded bg-zinc-700 hover:bg-gray-600 text-white"
          onClick={() => onView("month")}
        >
          Month
        </button>
        <button
          className="px-2 py-1 rounded bg-zinc-700 hover:bg-gray-600 text-white"
          onClick={() => onView("week")}
        >
          Week
        </button>
        <button
          className="px-2 py-1 rounded bg-zinc-700 hover:bg-gray-600 text-white"
          onClick={() => onView("day")}
        >
          Day
        </button>
      </div>
    </div>
  );
}

/** Modal for new events. */
function CreateEventModal({
  onClose,
  onCreate,
  slotInfo,
}: {
  onClose: () => void;
  onCreate: (data: {
    title: string;
    start: Date;
    end: Date;
    description?: string;
  }) => void;
  slotInfo: { start: string; end: string };
}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [start, setStart] = useState(slotInfo.start);
  const [end, setEnd] = useState(slotInfo.end);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !start || !end) return;
    onCreate({
      title,
      description: desc,
      start: new Date(start),
      end: new Date(end),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded bg-gray-700 text-gray-200
                         placeholder-gray-400 focus:outline-none focus:ring-1 
                         focus:ring-gray-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Description
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 rounded bg-gray-700 text-gray-200
                         placeholder-gray-400 focus:outline-none focus:ring-1 
                         focus:ring-gray-500"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          {/* Start/End */}
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block text-sm mb-1 text-gray-300">Start</label>
              <input
                type="datetime-local"
                className="w-full px-3 py-2 rounded bg-gray-700 text-gray-200
                           placeholder-gray-400 focus:outline-none focus:ring-1 
                           focus:ring-gray-500"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1 text-gray-300">End</label>
              <input
                type="datetime-local"
                className="w-full px-3 py-2 rounded bg-gray-700 text-gray-200
                           placeholder-gray-400 focus:outline-none focus:ring-1 
                           focus:ring-gray-500"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-500 transition 
                         text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-600 hover:bg-gray-500 transition 
                         text-white rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/** Format date objects for <input type="datetime-local"> */
function toDateTimeLocal(date: Date) {
  if (!date) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const mins = pad(date.getMinutes());
  return `${year}-${month}-${day}T${hours}:${mins}`;
}
