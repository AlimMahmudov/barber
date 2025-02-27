"use client";
import React, { useState, useEffect } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./custom-calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface MyCustomCalendarProps {
  setText4: React.Dispatch<React.SetStateAction<string>>;
}

const MyCustomCalendar = ({ setText4 }: MyCustomCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Value>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatDate = (date: Date) => {
    return date
      .toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".");
  };

  const handleDateChange: CalendarProps["onChange"] = (value) => {
    setSelectedDate(value);
    if (isClient) {
      setText4(
        Array.isArray(value)
          ? `${formatDate(value[0]!)} - ${formatDate(value[1]!)}`
          : value
          ? formatDate(value)
          : ""
      );
    }
  };

  const disablePastDates = ({ date }: { date: Date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="container2">
      <h1>Укажите день</h1>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileDisabled={disablePastDates}
        />
      </div>
    </div>
  );
};

export default MyCustomCalendar;
