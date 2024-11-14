import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../services/api";
import { useStateValue } from "../../services/StateProvider";
import "./EventInfo.css";
import Sidebar from "../../components/Sidebar";

import { Link } from "react-router-dom";
import Select from "react-select";
import Modal from "../../utils/modal";
const EventInfo = ({ history }) => {
  const [{ user, isSidebarOpen }, dispatch] = useStateValue();
  const [event, setEvent] = useState({});
  const [isSubscribed, setSubscribedStatus] = useState(false);
  const URL = window.location.pathname;

  const getEvents = async () => {
    const response = await api.get(URL);
    const event = response.data || [];
    console.log("event", event);
    setEvent(event);
    setSubscribedStatus(
      event.usersSubscribed.includes(localStorage.getItem("userId"))
    );
  };

  useEffect(() => {
    getEvents();
  }, []);

  console.log(isSubscribed, "isSubscribed");
  const handleSubscribeEvent = async () => {
    if (isSubscribed) {
      console.log("unsubscribe", isSubscribed);
      if (window.confirm("Are You sure to unsubscribe from this event")) {
        const response = await api.post(
          `event/${event.id}/unsubscribe`,
          {},
          {
            headers: {
              Authorization: localStorage.getItem("token"),
              "Content-Type": "application/json",
            },
          }
        );
        console.log("sadsafas", response.data);
        response.data
          ? setSubscribedStatus(false)
          : alert("Could not unsubscribe, Ops!");
      }
    } else {
      console.log("event.id", event.id);
      const response = await api.post(
        `event/${event.id}/subscribe`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      console.log("event", response.data);
      response.data
      ? setSubscribedStatus(true)
      : alert("Could not subscribe, Ops!");
    }
  };

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        toggle={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
      />
      <Navbar toggle={() => dispatch({ type: "TOGGLE_SIDEBAR" })} />
      {/* <HeroSection/> */}
      <section id="event" className="container p-5">
        {event && (
          <section class="py-10 relative bg-gray-100 sm:py-16 lg:py-24">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                <div class="relative mb-12">
                  <img
                    class="w-full rounded-md"
                    src={event.thumbnail_url}
                    alt=""
                  />

                  <div class="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                    <div class="overflow-hidden bg-white rounded">
                      <div class="px-10 py-6">
                        <div class="flex items-center">
                          <p class="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                            {event.price} ₹
                          </p>
                          <p class="pl-6 text-sm font-medium text-black sm:text-lg">
                            Entry Fee
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                    <svg
                      class="w-8 h-8 text-orange-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                    {event.title}
                  </h2>
                  <p class="mt-6 text-lg leading-relaxed text-gray-600">
                    {event.description} Lorem ipsum dolor sit amet,
                    consecteturadipiscing elit. In nisl nulla, dapibus nec
                    antea,tincidunt efficitur tortor. Pellentesque
                    feugiatlaoreetnisi, quis fermentum diam volutpat
                    interdum.Suspendissepotenti. Pellentesque habitant morbi
                    tristiquesenectus etnetus et malesuada fames ac turpis
                    egestas. Sednonefficitur velit. Phasellus eget tortor
                    volutpat,egestasmetus ac, bibendum neque. Vivamus quis
                    interdumlectus.Donec mi sem, bibendum fringilla elementum
                    quis,scelerisquequis diam. Nullam euismod
                  </p>
                  <button
                    onClick={handleSubscribeEvent}
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  >
                    {isSubscribed ? "UnSubscribe" : "Subscribe"}
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </section>
      <Footer />
    </>
  );
};

export default EventInfo;
