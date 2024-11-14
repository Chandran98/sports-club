import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Event from "../../components/Event";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Dashboard.css";
import HeroSection from "../../components/HeroSection";
import { scroller } from "react-scroll";
import { useStateValue } from "../../services/StateProvider";
import Sidebar from "../../components/Sidebar";
import Loading from "../../components/Loading";
import WizardForm from "../../components/form/Forms/ReduxWizard/WizardForm";
import eventsasset from "../../assets/eventsasset.webp";
const Dashboard = () => {
  const [{ isSidebarOpen }, dispatch] = useStateValue();
  const [hasAPINotResponded, setAPIStatus] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
    scroller.scrollTo("events", {
      duration: 1000,
      smooth: true,
      offset: -80,
      exact: "true",
    });
  }, []);
  const getEvents = async (filter) => {
    const url = filter ? `/dashboard/${filter}` : "/dashboard";
    const response = await api.get(url);
    setEvents(response.data);
    setAPIStatus(false);
  };
  const filterEvents = (query) => {
    getEvents(query);
  };
  return (
    <>
      {/* <Sidebar isOpen={isSidebarOpen} toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
      //  */}
      {/* <HeroSection /> */}
      <Navbar toggle={() => dispatch({ type: "TOGGLE_SIDEBAR" })} />
      <section id="events" className="m-10 ">
        <section
          className="relative bg-gray-100 sm:py-16 mb-5 h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${eventsasset})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Dark overlay for text readability */}
          <div className="relative flex justify-center items-center h-full">
            <h2 className="text-3xl font-bold text-gray-200 sm:text-4xl lg:text-5xl">
              All Events
            </h2>
          </div>
        </section>
        <div className="bg-gray-100  sm:py-16 p-5  text-black ">
          <p className="events__filter">Filter:</p>
          <select
            name="event"
            id="event"
            className="custom-select sources"
            onChange={(e) => {
              filterEvents(e.target.value);
            }}
          >
            <option className="custom-option" value={""}>
              All Events
            </option>
            <option className="custom-option" value="Vollyball">
              Vollyball
            </option>
            <option className="custom-option" value="Football">
              Football
            </option>
            <option className="custom-option" value="Kabbadi">
              Kabbadi
            </option>
            {/* <option className="custom-option" value="Others">
              Others
            </option> */}
          </select>
          {hasAPINotResponded && (
            <Loading message={"Fetching all the events"} />
          )}
          <div className="cards-wrapper">
            {events.map((event) => (
              <Event {...event} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Dashboard;
