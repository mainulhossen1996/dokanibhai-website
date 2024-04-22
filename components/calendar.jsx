"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock, Video } from 'lucide-react'

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showNextButton, setShowNextButton] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [showFormList, setShowFormList] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [clickedDate, setClickedDate] = useState(null);

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ];

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      companyName: "",
      dateTime: null,
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    dateTime: null,
  });

  const handleNumberClick = (date) => {
    setShowTimeSlots(true);
    setClickedDate(date);
  };
  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
    setShowNextButton(true);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      } else {
        return prevMonth - 1;
      }
    });
  };

  const handleNextButtonClick = () => {
    if (selectedTime && clickedDate !== null) {
      const dateTime = `${new Date(
        currentYear,
        currentMonth,
        clickedDate
      ).toLocaleDateString()} ${selectedTime}`;

      setFormData((prevFormData) => ({
        ...prevFormData,
        dateTime: dateTime,
      }));

      setShowFormList(true);
    } else {
      console.log("Please select a date and time");
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      } else {
        return prevMonth + 1;
      }
    });
  };

  const renderCalendarDates = () => {
    const monthStart = new Date(currentYear, currentMonth, 1);
    const monthEnd = new Date(currentYear, currentMonth + 1, 0);
    const startDate = monthStart.getDay();
    const endDate = monthEnd.getDate();

    const dates = [];
    for (let i = 1; i <= endDate; i++) {
      dates.push(i);
    }

    for (let i = 0; i < startDate; i++) {
      dates.unshift(null);
    }

    const weeks = [];
    let week = [];
    dates.forEach((date, index) => {
      if (date !== null) {
        week.push(date);
      } else {
        week.push(null);
      }

      if ((index + 1) % 7 === 0 || index === dates.length - 1) {
        weeks.push(week);
        week = [];
      }
    });

    const today = new Date();
    const currentDate = today.getDate();
    const currentMonthIndex = today.getMonth();
    const currentYearIndex = today.getFullYear();

    return weeks.map((week, index) => (
      <tr key={index}>
        {week.map((date, index) => (
          <td key={index}>
            {date && (
              <div className="flex justify-center">
                <div
                  className={`px-3 py-[9px] transform translate duration-300 cursor-pointer text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-full h-11 w-11   ${
                    clickedDate === date ? "rounded-full bg-blue-100 " : ""
                  }`}
                  onClick={() => handleNumberClick(date)}
                >
                  <p
                    className={` text-base text-center font-medium flex justify-center items-center ${
                      currentMonth === currentMonthIndex &&
                      currentYear === currentYearIndex &&
                      date === currentDate
                        ? "text-blue-600 font-semibold text-lg "
                        : ""
                    }`}
                  >
                    {date}
                  </p>
                </div>
              </div>
            )}
          </td>
        ))}
      </tr>
    ));
  };

  return (

        <div className="bg-white flex w-[1150px] rounded-[10px] border border-gray-200 shadow-inner my-10">
          <div className="w-5/12">
            <div className="relative">
              <div className="overflow-hidden hover:overflow-y-auto custom-scrollbar">
                <div className="flex items-center px-6 py-6 border-b ">
                <div className="">
                    <Image
                    className="rounded-full h-[80px] w-[80px] object-cover"
                    width={100}
                    height={100}
                    alt="logo"
                    src="/image/salman.png"
                  />
                    </div>
                    <div className="ms-3 text-start">
                      <p className="font-bold">Salman Farshi</p>
                      <p className="font-normal text-[14px]">Head of Sales, Dokanibhai</p>
                      <p className="font-normal text-[14px] text-gray-500">+880 1843687598</p>
                    </div>
                </div>

                <div className="px-6 text-start py-4">

                  <p className="font-semibold text-gray-500 text-sm">
                    Team Dokanibhai
                  </p>
                  <p className="font-bold text-[25px] ">
                    eMeet with Dokanibhai
                  </p>
                  <div className="flex items-center pt-5 pb-3">
                    <Clock className="me-2" color="black" size={16}/>
                    <p className="font-semibold text-gray-500 text-sm">
                      20 min
                    </p>
                  </div>

                  <div className="flex items-center pb-5">
                  <Video className="me-2" color="black" size={16}/>
                    <p className="font-semibold text-gray-500 text-sm mt-[2px]">
                      Web conferencing
                    </p>
                  </div>
                  <div className="max-w-[400px] p-6 ps-0">
                    <p className="text-sm pb-4">
                    DokaniBhai is a one Stop POS Inventory Solution with e-commerce web integration that is designed to assist retail shop owners to manage their business.
                    </p>

                    <p className="text-sm pb-4">
                      Let's huddle for 20 minutes to discover pain points &
                      solutions!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-7/12 border-s">
            <div className="">
              {showFormList ? (
                <form
                  className="p-6 text-start w-4/5"
                  onSubmit={handleFormSubmit}
                >
                  <h2 className="text-lg font-bold mb-4">Enter Contact Details</h2>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block font-semibold text-sm text-gray-600"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormInputChange}
                      className="border-gray-300 border w-full p-2 rounded-md"
                    />
                  </div>
                  

                  <div className="mb-4">
                    <label
                      htmlFor="company"
                      className="block font-semibold text-sm text-gray-600"
                    >
                      Organization Name
                    </label>
                    <input
                      type="name"
                      id="company"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleFormInputChange}
                      className="border-gray-300 border w-full p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block font-semibold text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormInputChange}
                      className="border-gray-300 border w-full p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block font-semibold text-sm text-gray-600"
                    >
                      Mobile No
                    </label>
                    <input
                      type="mobile"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleFormInputChange}
                      className="border-gray-300 border w-full p-2 rounded-md"
                    />
                  </div>
                  <div className="text-xs pb-5 pt-8">
                    <p className="font-medium">
                      By proceeding, you confirm that you have read and agree to
                    </p>
                    <span className="flex items-center">
                      <p className="text-blue-600 font-semibold">
                        Calendly's Terms of Use
                      </p>
                      and
                      <p className="text-blue-600 font-semibold">
                        Privacy Notice.
                      </p>
                    </span>
                  </div>
                  <div className="text-start">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 font-semibold"
                    >
                      Schedule Event
                    </button>
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-3 ">
                  <div className={showTimeSlots ? "col-span-2" : "col-span-3"}>
                    <div className="pt-8">
                      <p className="text-lg ps-8 text-center font-bold text-gray-700">
                        Select a Date & Time
                      </p>

                      <div className="flex justify-center items-center pt-8 ps-4">
                        <button
                          className="bg-blue-50 hover:bg-blue-100 rounded-full p-3 cursor-pointer transform translate duration-300"
                          onClick={handlePrevMonth}
                        >
                          <ChevronLeft className="text-blue-600" size={16} />
                        </button>
                        <p className="text-blue-500 text-sm w-[10rem]">
                          {`${new Date(
                            currentYear,
                            currentMonth
                          ).toLocaleString("default", {
                            month: "long",
                          })} ${currentYear}`}
                        </p>
                        <button
                          className="bg-blue-50 hover:bg-blue-100 rounded-full p-3 cursor-pointer transform translate duration-300"
                          onClick={handleNextMonth}
                        >
                          <ChevronRight className="text-blue-600" size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-7 overflow-x-auto">
                        <table className="w-full ">
                          <thead>
                            <tr>
                              {" "}
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 ">
                                    Su
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 ">
                                    Mo
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 ">
                                    Tu
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 ">
                                    We
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 ">
                                    Th
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 ">
                                    Fr
                                  </p>
                                </div>
                              </th>
                              <th>
                                <div className="w-full flex justify-center">
                                  <p className="text-base font-medium text-center text-gray-800 ">
                                    Sa
                                  </p>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>{renderCalendarDates()}</tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {showTimeSlots && (
                    <div className="col-span-1 ">
                      <p className="pt-24 text-start mx-4">
                        {clickedDate
                          ? new Date(
                              currentYear,
                              currentMonth,
                              clickedDate
                            ).toLocaleDateString(undefined, {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                            })
                          : ""}
                      </p>

                      <div className="flex flex-col mt-4 justify-center overflow-y-auto mx-4">
                        <div className="flex flex-col">
                          {timeSlots.map((time, index) => (
                            <div key={index} className="flex gap-3 items-center">
                              <button
                                className={`border border-blue-600 hover:bg-blue-100 text-nowrap rounded-md text-sm py-2 my-1 transform translate duration-500 ${
                                  selectedTime === time
                                    ? "w-2/4"
                                    : "w-full"
                                }`}
                                onClick={() => handleTimeSlotClick(time)}
                              >
                                {time}
                              </button>
                              {selectedTime === time && (
                                <div className="w-2/4">
                                  <button
                                    className="bg-blue-500 text-white text-sm font-[550] py-[.59rem] px-[10px] w-full rounded-md "
                                    onClick={handleNextButtonClick}
                                  >
                                    Next
                                  </button>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

  );
};

export default Calendar;
