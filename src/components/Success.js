import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      I like you. I wanted to say this for a while, but I was afraid of rejection. Last night, when you mentioned your engagement plans, it gave me pause. I want to be the guy you're looking for. I'll always be there for you, and I'll be loyal forever. I don't know how to propose or confess my love; I just wrote everything that was in my heart.
    </p>
    <p className="App-text-success">
      
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">29-6-2024</p>
  </div>
);

export default Success;
