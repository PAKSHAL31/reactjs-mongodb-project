import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

//handleLeaveEvent, handlePayEvent
const RegisteredEventTile = ({ event, handleLeaveEvent }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  // Function to check if the event date has passed
  const isEventPast = (eventDate) => {
    const now = new Date();
    const eventDateTime = new Date(eventDate);
    return now > eventDateTime;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          {/* Display event image */}
          <img
            src={event?.image}
            alt={event?.eventName}
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
          {/* Display badge for participant limit */}
          {event?.participantLimit === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              No seats available
            </Badge>
          ) : event?.participantLimit < 10 ? (
            <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">
              {`Only ${event?.participantLimit} seats left`}
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          {/* Event name */}
          <h2 className="text-xl font-bold mb-2">{event?.eventName}</h2>

          {/* Event date and time */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-[16px] text-muted-foreground">
              Date: {formatDate(event?.eventDate)}
            </span>
            <span className="text-[16px] text-muted-foreground">
              Time: {formatTime(event?.eventDate)}
            </span>
          </div>

          {/* Event price */}
          <div className="flex justify-between items-center mb-2">
            {event?.price > 0 ? (
              <span className="text-lg font-semibold text-primary">
                Fee: ${event?.price}
              </span>
            ) : (
              <span className="text-lg font-semibold">Free</span>
            )}
          </div>
        </CardContent>
      </div>

      {/* Action buttons: Leave Event and Pay */}
      <CardFooter className="space-x-2">
        {isEventPast(event?.eventDate) ? (
          // If the event has passed, show the reviews link
          <a
            href="https://your-reviews-website.com" // Link to the reviews page
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-blue-500 underline text-center"
          >
            Leave a Review
          </a>
        ) : (
          // If the event is upcoming, show Leave and Pay buttons
          <>
            <Button
              className="w-1/2"
              variant="destructive"
              onClick={() => handleLeaveEvent(event?._id)}
            >
              Leave
            </Button>
            {event?.price > 0 && <Button className="w-1/2">Pay</Button>}
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default RegisteredEventTile;

//onClick={() => handlePayEvent(event?._id)}
