import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRegisteredEvents, leaveEvent } from "@/store/user/registeredevents-slice";
import RegisteredEventTile from "@/components/user-view/registered-event-tile";
import { toast } from "@/hooks/use-toast";

const UserHome = () => {
  const dispatch = useDispatch();
  const { registeredEvents } = useSelector(
    (state) => state.registeredUserEvents
  );
  const { user } = useSelector((state) => state.auth);

  function handleLeaveEvent(eventId){
    dispatch(leaveEvent({userId: user?.id , eventId})).then(
      (data) =>{
        console.log("Dale: ", data)
        if(data?.payload?.success){
          toast({
            title: data?.payload?.message,
          });
          dispatch(getUserRegisteredEvents(user?.id))
        }
      }
    )
  }


  useEffect(() => {
    dispatch(getUserRegisteredEvents(user?.id));
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {registeredEvents.length > 0 ? (
        registeredEvents.map((event) => (
          <RegisteredEventTile key={event._id} event={event} handleLeaveEvent={handleLeaveEvent}/>
        ))
      ) : (
        <p>No registered events yet.</p>
      )}
    </div>
  );
};

export default UserHome;
