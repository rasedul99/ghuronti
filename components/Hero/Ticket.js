import React from "react";
import TicketOption from "./TicketOption";

const Ticket = () => {
  return (
    <div>
      <div className="bg-white flex rounded-t-[42px]">
        <TicketOption
          image="/assets/icons/tickets/haji.png"
          title="Haji & Umrah"
        />
        <TicketOption image="/assets/icons/tickets/Plane.png" title="Flight" />
        <TicketOption image="/assets/icons/tickets/Hotel.png" title="Hotel" />
        <TicketOption image="/assets/icons/tickets/visa.png" title="Visa" />
        <TicketOption image="/assets/icons/tickets/Tour.png" title="Tours" />
        <TicketOption image="/assets/icons/tickets/Bus.png" title="Buses" />
        <TicketOption image="/assets/icons/tickets/Train.png" title="Trains" />
      </div>
    </div>
  );
};

export default Ticket;
